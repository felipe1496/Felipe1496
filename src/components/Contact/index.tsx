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

export default function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const handleSubmit = () => {
    console.log({
      name,
      mail,
      phone,
      message
    })
  }

  return (
    <Container id="contact">
      <h1>
        <img src="./assets/contact.svg" alt="" />
        {" CONTACT ME"}
      </h1>
      <ContactContainer>
        <MessageContainer>
          <form id="messageForm" onSubmit={(event) => {
            event.preventDefault()
            handleSubmit()
          }}>
            <SenderInfo>
              <label>Your Name</label>
              <input type="text" onChange={(event) => setName(event.target.value)} />

              <label>Mail</label>
              <input type="text" onChange={(event) => setMail(event.target.value)} />

              <label>Phone</label>
              <input type="tel" onChange={(event) => setPhone(event.target.value)} />
            </SenderInfo>
            <MessageInfo>
              <label>Message</label>
              <textarea onChange={(event) => setMessage(event.target.value)} />
            </MessageInfo>
          </form>
          <button type="submit" form="messageForm">
            Submit
          </button>
        </MessageContainer>
      </ContactContainer>
    </Container>
  );
}
