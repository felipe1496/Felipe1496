import { useState } from "react";
import Contact from "../../components/Contact";
import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

import { Container } from "./styles";

export default function Portifolio() {
  const [topButton, setTopButton] = useState(false);

  const scroolTopButton = () => {
    if (window.scrollY >= 8) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  };
  window.addEventListener("scroll", scroolTopButton);

  return (
    <Container topButton={topButton}>
      <a href="#landing">
        <span>&#9652;</span>
      </a>
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}
