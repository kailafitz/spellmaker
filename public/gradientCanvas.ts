// lib/gradientBlobs.ts
import * as THREE from "three";

type CleanupFn = () => void;

export function createGradientBlobs(container: HTMLElement): CleanupFn {
    // --- Tunables ---
    const MAX_DPR = 1.5;   // cap devicePixelRatio for perf; try 1.0 on mobile if needed
    const TARGET_FPS = 30; // throttled FPS; bump to 60 if you really want it
    const NOISE_SCALE = 6.0;  // lower scale = smoother noise (cheaper visual change)
    const NOISE_SPEED = 0.3;  // noise animation speed

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false,
    });

    container.appendChild(renderer.domElement);

    // Scene + camera (full-screen quad)
    const scene = new THREE.Scene();
    // Ortho camera that maps the -1..1 plane directly to the screen
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Fullscreen plane
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
            u_time: { value: 0 },
            u_resolution: { value: new THREE.Vector2(1, 1) }, // will set below
            u_noiseScale: { value: NOISE_SCALE },
            u_noiseSpeed: { value: NOISE_SPEED },
        },
        vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      precision mediump float;

      uniform float u_time;
      uniform vec2  u_resolution;
      uniform float u_noiseScale;
      uniform float u_noiseSpeed;

      // 2D Simplex noise by Ashima Arts
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 x = fract(p * C.w) * 2.0 - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        vec2 g0 = vec2(a0.x, h.x);
        vec2 g1 = vec2(a0.y, h.y);
        vec2 g2 = vec2(a0.z, h.z);
        vec2 m0 = max(0.5 - vec2(dot(x0,x0), dot(x12.xy,x12.xy)), 0.0);
        vec2 m1 = max(0.5 - vec2(dot(x12.zw,x12.zw)), 0.0);
        m0 = m0*m0;
        m1 = m1*m1;
        return 70.0 * (m0.x * dot(g0, x0) + m0.y * dot(g1, x12.xy) + m1.x * dot(g2, x12.zw));
      }

      // Soft circle blob with smooth edges; uses shared noise 'n' so we don't recompute per blob
      float blob(vec2 uv, vec2 center, float radius, vec2 stretch, float n) {
        vec2 dir = (uv - center) * stretch;
        float dist = length(dir);
        float noisyRadius = radius + 0.08 * n;
        return smoothstep(noisyRadius, noisyRadius - 0.1, dist);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = u_time * 0.3;

        // ONE noise sample per pixel (was 3× before)
        float n = snoise(uv * u_noiseScale + t * u_noiseSpeed);

        // Centers and shapes
        vec2 center1 = vec2(0.5 + 0.4 * cos(t),      0.5 + 0.35 * sin(t * 1.5));
        vec2 center2 = vec2(0.5 + 0.1 * cos(t + 2.0), 0.6 + 0.1  * sin(t + 2.0));
        vec2 center3 = vec2(0.7 + 0.1 * cos(t + 4.0), 0.4 + 0.1  * sin(t + 4.0));

        float b1 = blob(uv, center1, 0.33, vec2(1.0, 1.3), n);
        float b2 = blob(uv, center2, 0.33, vec2(1.3, 1.0), n);
        float b3 = blob(uv, center3, 0.33, vec2(0.8, 1.4), n);

        float combined = max(max(b1, b2), b3);

        const vec3 color1 = vec3(0.333, 0.239, 0.871); // #553DDE
        const vec3 color2 = vec3(0.141, 0.102, 0.369); // #24195E
        const vec3 color3 = vec3(0.384, 1.000, 0.455); // #62FF74

        vec3 color = (b1 * color1) + (b2 * color2) + (b3 * color3);
        color /= max(combined, 0.001);

        gl_FragColor = vec4(color, combined);
      }
    `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Size & DPR handling
    function resize() {
        const cssW = window.innerWidth;
        const cssH = window.innerHeight;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DPR);

        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(cssW, cssH, false);

        // Pass drawing buffer size (actual pixels) to the shader
        const bufW = Math.floor(cssW * pixelRatio);
        const bufH = Math.floor(cssH * pixelRatio);
        material.uniforms.u_resolution.value.set(bufW, bufH);
    }

    resize();
    window.addEventListener("resize", resize);

    // Animation loop (throttled)
    let rafId = 0;
    let lastTime = 0;
    let running = true;

    function animate(now: number) {
        if (!running) {
            rafId = requestAnimationFrame(animate);
            return;
        }

        // Throttle to TARGET_FPS
        if (now - lastTime >= 1000 / TARGET_FPS) {
            material.uniforms.u_time.value = now * 0.001;
            renderer.render(scene, camera);
            lastTime = now;
        }
        rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // Pause when tab is hidden
    const onVisibility = () => {
        running = !document.hidden;
        // reset timing so we don't try to "catch up"
        lastTime = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Cleanup
    return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);

        geometry.dispose();
        material.dispose();
        renderer.dispose();

        if (renderer.domElement.parentElement) {
            renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
    };
}
