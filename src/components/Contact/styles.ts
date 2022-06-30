import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }

  @media (max-height: 550px) {
    display: flex;
    height: 100%;
  }

  background: var(--light-blue);
  justify-content: center;
  h1 {
    text-align: center;
    width: 70%;
    margin-top: 80px;
    font-family: "Rajdhani";
    color: var(--green);
    font-size: 2rem;

    > img {
      width: 20px;
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 100%;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > form {
    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    margin-top: 64px;
    display: flex;
    width: 50%;
    min-width: 600px;
    border-radius: 12px;
    padding: 32px 0 32px 0;
    background-color: var(--dark-blue);
    max-width: 700px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-height: 550px) {
      background-color: transparent;
      box-shadow: 0px 0px 0px;
    }
  }

  > button {
    font-size: 14px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    background-color: var(--green);
    border-radius: 12px;
    margin-top: 16px;
    width: 150px;
    height: 40px;
  }
`;

export const SenderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  > label {
    color: white;
    font-size: 12px;
  }
  label:not(:first-child) {
    margin-top: 10px;
  }
  > input {
    width: 240px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #d7d9dc;
    border-radius: 8px;
    padding: 0 1rem 0 1rem;
    color: white;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > label {
    color: white;
    font-size: 12px;
  }
  > textarea {
    width: 240px;
    height: 250px;
    border-radius: 8px;
    background-color: #d7d9dc;
    padding: 1rem;
  }
`;
