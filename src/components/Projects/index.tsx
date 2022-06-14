import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "../ProjectCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, ProjectsContainer, ProjectsCardsContainer } from "./styles";

const projectsInfo = [
  {
    title: "LetMeAsk",
    imageUrl: "./assets/letmeask.svg",
    description:
      "LetMeAsk its a question ranker that can be used in many ways. To ranker te question of an audion or class for example.",
    access: {
      github: "https://github.com/Felipe1496/letmeask",
      link: "https://letmeask-4b0c6.web.app",
    },
  },
  {
    title: "Crwn-clothing",
    imageUrl: "./assets/Crwn-clothing.svg",
    description:
      "Crwn Clothing its a E-commerce application where I learned many of the most popular React Skills, among them: Redux and ContextApi",
    access: {
      github: "https://github.com/Felipe1496/crwn-clothing",
      link: "https://majestic-liger-17949c.netlify.app/",
    },
  },
  {
    title: "Rocketflix",
    imageUrl: "./assets/rocketflix.png",
    description:
      "Rocketflix its a Rocketseat Challenge where I consumed The Movie DB API on front-end to show a random movie recommendation",
    access: {
      github: "https://github.com/Felipe1496/rocketflix",
      link: "https://nervous-swartz-880233.netlify.app/",
    },
  },
  {
    title: "Discord Ui Clone",
    imageUrl: "./assets/discord.png",
    description: "This project is a partial UI discord clone",
    access: {
      github: "https://github.com/Felipe1496/UI-discord-clone",
      link: "https://jovial-curie-449951.netlify.app/",
    },
  },
  {
    title: "Move It",
    imageUrl: "./assets/moveit.png",
    description:
      "Moveit is a selfcare app where you do physical exercises while applies pomodoro technique",
    access: {
      github: "https://github.com/Felipe1496/move.it",
      link: "https://moveit-next-eta-gules.vercel.app",
    },
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <Container id="projects">
      <ProjectsContainer>
        <h1>
          <img src="./assets/projects.svg" alt="" />
          {" Projects"}
        </h1>
        <ProjectsCardsContainer data-aos="fade-right">
          <AliceCarousel
            responsive={{
              1200: { items: 3 },
              901: { items: 2 },
              900: { items: 1 },
            }}
            mouseTracking
            items={projectsInfo.map(
              ({ imageUrl, title, description, access }) => (
                <ProjectCard
                  imageUrl={imageUrl}
                  title={title}
                  description={description}
                  access={access}
                />
              )
            )}
          />
          {/* {projectsInfo.map(({ imageUrl, title, description }) => (
            <ProjectCard
              imageUrl={imageUrl}
              title={title}
              description={description}
            />
          ))} */}
        </ProjectsCardsContainer>
      </ProjectsContainer>
    </Container>
  );
}
