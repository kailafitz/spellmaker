import React from "react";
import Container from "./container";

<<<<<<< Updated upstream
const Footer = () => {
  return (
    <footer className="">
      <Container className="text-center py-5">
        <p></p>
      </Container>
    </footer>
  );
};
=======
// footer not obvious, maybe make static
export default function FloatingDrawer() {
    const [open, setOpen] = useState(false);
    const year = new Date().getFullYear();
>>>>>>> Stashed changes

export default Footer;
