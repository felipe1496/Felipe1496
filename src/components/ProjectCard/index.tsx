import {
  Container,
  ProjectCardContent,
  TopStripe,
  ProjectLinks,
} from "./styles";

interface accessProps {
  github: string;
  link: string;
}

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  access: accessProps;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  access,
}: ProjectCardProps) {
  return (
    <Container>
      <TopStripe />
      <ProjectCardContent>
        <img src={imageUrl} alt="alt text" />
        <h1>{title}</h1>
        <p title={description}>{description}</p>
        <ProjectLinks>
          <a href={access.github} target="_blank" rel="noreferrer">
            <img src="./assets/littleGithub.svg" alt="" />
          </a>
          <a href={access.link} target="_blank" rel="noreferrer">
            <img src="./assets/link.svg" alt="" />
          </a>
        </ProjectLinks>

        {/* <a href={access} target="_blank">
          ACCESS
          <div />
        </a> */}
      </ProjectCardContent>
    </Container>
  );
}
