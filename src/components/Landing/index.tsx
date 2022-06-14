import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container, Content, Text, BlurBall } from "./styles";

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container id="landing">
      <Content data-aos="fade-down">
        <Text>
          <h1>
            <img src="./assets/about.svg" alt="" />
            {" FRONT-END DEVELOPER"}
          </h1>
          <h2>Felipe Oliveira</h2>
          <p>
            Hi, My name is Felipe. I’m passionate with technologie since very
            young. The long hours I spent on front of screen when I was young
            building little website or playing video games turned me into a very
            technologie person. Im curious about this world and I’m always
            trying to learn something new.
          </p>
        </Text>
        <img src="./assets/Coding-bro.svg" alt="coding image" />
      </Content>
      <BlurBall />
    </Container>
  );
}
