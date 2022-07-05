import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  ContactContainer,
  MessageContainer,
  SenderInfo,
  MessageInfo,
} from "./styles";
import { CircleNotch } from "phosphor-react";

export default function Contact() {
  const [loadingEmailSending, setLoadingEmailSending] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    setLoadingEmailSending(true);
    event.preventDefault();
    emailjs
      .sendForm(
        "service_dtn8p1c",
        "template_o4acihm",
        form.current,
        "3-ZqjkpEvTRbymo5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoadingEmailSending(false);
        },
        (error) => {
          console.log(error.text);
          setLoadingEmailSending(false);
        }
      );
  };

  return (
    <Container id="contact">
      <h1>
        <img src="./assets/contact.svg" alt="" />
        {" CONTACT ME"}
      </h1>
      <ContactContainer>
        <MessageContainer>
          <form ref={form} id="messageForm" onSubmit={sendEmail}>
            <SenderInfo>
              <label>Your Name</label>
              <input type="text" name="name" required />

              <label>Mail</label>
              <input type="text" name="email" required />

              <label>Phone</label>
              <input type="tel" name="phone" />
            </SenderInfo>
            <MessageInfo>
              <label>Message</label>
              <textarea name="message" required />
            </MessageInfo>
          </form>
          <button type="submit" value="Send" form="messageForm">
            {loadingEmailSending ? (
              <CircleNotch size={18} color="#ffffff">
                <animate
                  values="0;1;0"
                  dur="4s"
                  repeatCount="indefinite"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 0 0"
                  to="360 0 0"
                  repeatCount="indefinite"
                ></animateTransform>
              </CircleNotch>
            ) : (
              "Submit"
            )}
          </button>
        </MessageContainer>
      </ContactContainer>
    </Container>
  );
}
