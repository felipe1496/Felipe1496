import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import StackIcon from "../StackIcon";
import { Container, SkillsContainer, StackIcons } from "./styles";

const stackInfo = [
  {
    name: "HTML5",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    progress: "100%",
    barColor: "#F16529",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    name: "CSS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    progress: "80%",
    barColor: "#33A9DC",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    progress: "90%",
    barColor: "#F0DB4F",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    progress: "85%",
    barColor: "#007ACC",
    href: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    progress: "90%",
    barColor: "#61DAFB",
    href: "https://pt-br.reactjs.org/docs/getting-started.html",
  },
  {
    name: "Firebase",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    progress: "87%",
    barColor: "#F58220",
    href: "https://firebase.google.com/docs",
  },
  {
    name: "Git",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    progress: "75%",
    barColor: "#F34F29",
    href: "https://git-scm.com/doc",
  },
  {
    name: "Github",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    progress: "99%", //We never know everything
    barColor: "#181616",
    href: "https://docs.github.com/pt",
  },
  {
    name: "Figma",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    progress: "87%",
    barColor: "#A259FF",
    href: "https://www.figma.com/",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <Container id="skills">
      <SkillsContainer>
        <h1>
          <img src="./assets/tecnologies.svg" alt="" />
          {" SKILLS"}
        </h1>
        <StackIcons data-aos="fade-left">
          {stackInfo.map(({ name, imageUrl, progress, barColor, href }) => (
            <StackIcon
              stackName={name}
              imageUrl={imageUrl}
              progress={progress}
              barColor={barColor}
              href={href}
            />
          ))}
        </StackIcons>
      </SkillsContainer>
      <img src="./assets/shape.png" alt="" />
    </Container>
  );
}
