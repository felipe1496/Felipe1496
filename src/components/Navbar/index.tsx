import React from "react";

import { useState } from "react";

import useWindowSize from "../../hooks/useWindowSize";

import { Container, Links, MobileLinks } from "./styles";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [height, width] = useWindowSize();

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container>
      <strong>
        <span>{`<`} </span>
        Felipe Oliveira
        <span> {`/>`}</span>
      </strong>
      {width < 900 ? (
        <button onClick={handleToggleMenu}>
          {menuIsOpen ? (
            <img src="./assets/close.svg" alt="" />
          ) : (
            <img src="./assets/menu.svg" alt="" />
          )}
        </button>
      ) : (
        <Links>
          <a href="#landing">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Links>
      )}
      {menuIsOpen && width < 900 ? (
        <MobileLinks>
          <a href="#landing">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </MobileLinks>
      ) : null}
    </Container>
  );
}
