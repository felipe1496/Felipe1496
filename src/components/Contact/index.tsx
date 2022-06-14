import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  ContactContainer,
  MessageContainer,
  InfoContainer,
} from "./styles";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <Container id="contact">
      <ContactContainer>
        <h1>
          <img src="./assets/contact.svg" alt="" />
          {" CONTACT ME"}
        </h1>
        <MessageContainer>
          <form>
            <InfoContainer>
              <label>Your Name</label>
              <input type="text" />

              <label>Mail</label>
              <input type="text" />

              <label>Phone</label>
              <input type="text" />
            </InfoContainer>
            <label>Message</label>
            <input type="text" />
          </form>
        </MessageContainer>
      </ContactContainer>
    </Container>
  );
}
