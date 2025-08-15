// lib/gradientBlobs.ts
import * as THREE from "three";

type CleanupFn = () => void;

export function createGradientBlobs(container: HTMLElement): CleanupFn {
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });

    const dpr = window.devicePixelRatio || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
            u_time: { value: 0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth * dpr, window.innerHeight * dpr) },
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            precision mediump float;

            uniform float u_time;
            uniform vec2 u_resolution;

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

            // Soft circle blob with smooth edges
            float blob(vec2 uv, vec2 center, float radius, vec2 stretch, float time) {
                vec2 dir = uv - center;
                dir *= stretch;
                float dist = length(dir);
                float n = snoise(uv * 10.0 + time * 0.3);
                float noisyRadius = radius + 0.08 * n;
                return smoothstep(noisyRadius, noisyRadius - 0.1, dist);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                float time = u_time * 0.3;

                vec2 center1 = vec2(0.5 + 0.4 * cos(time), 0.5 + 0.35 * sin(time * 1.5));
                vec2 center2 = vec2(0.5 + 0.1 * cos(time + 2.0), 0.6 + 0.1 * sin(time + 2.0));
                vec2 center3 = vec2(0.7 + 0.1 * cos(time + 4.0), 0.4 + 0.1 * sin(time + 4.0));

                float b1 = blob(uv, center1, 0.33, vec2(1.0, 1.3), time);
                float b2 = blob(uv, center2, 0.33, vec2(1.3, 1.0), time);
                float b3 = blob(uv, center3, 0.33, vec2(0.8, 1.4), time);

                float combined = max(max(b1, b2), b3);

                const vec3 color1 = vec3(0.333, 0.239, 0.871);
                const vec3 color2 = vec3(0.141, 0.102, 0.369);
                const vec3 color3 = vec3(0.384, 1.0, 0.455);

                vec3 color = vec3(0.0);
                color += b1 * color1;
                color += b2 * color2;
                color += b3 * color3;
                color /= max(combined, 0.001);

                gl_FragColor = vec4(color, combined);
            }
        `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Set size in device pixels but style size in CSS pixels
    function setRendererSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width * dpr, height * dpr, false);
        renderer.domElement.style.width = `${width}px`;
        renderer.domElement.style.height = `${height}px`;

        material.uniforms.u_resolution.value.set(width * dpr, height * dpr);
    }

    setRendererSize();
    container.appendChild(renderer.domElement);

    function onResize() {
        setRendererSize();
    }

    window.addEventListener("resize", onResize);

    let animationId: number;
    function animate(time: number) {
        material.uniforms.u_time.value = time * 0.001;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (renderer.domElement.parentElement) {
            renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
    };
}
