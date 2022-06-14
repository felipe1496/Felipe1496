import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  background: var(--light-blue);
  justify-content: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 80px;
  border: 1px solid red;
  width: 70%;
  h1 {
    font-family: "Rajdhani";
    color: var(--green);
    font-size: 2rem;

    > img {
      width: 20px;
    }
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  border: 1px solid red;
`;

export const InfoContainer = styled.div``;
