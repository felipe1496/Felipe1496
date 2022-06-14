import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-blue);
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  > img {
    transform: translate(9%, -21.5%);
    width: 30%;
    min-width: 300px;
  }
  @media (max-width: 900px) {
    > img {
      display: none;
    }
    text-align: center;
    justify-content: center;
    width: auto;
  }
`;

export const Text = styled.div`
  h1 {
    font-family: "Rajdhani";
    color: var(--green);
    font-size: 2rem;

    > img {
      width: 20px;
    }
  }

  h2 {
    color: white;
    font-size: 1.5rem;
    margin: 0.625rem 0;
  }

  p {
    color: white;
    width: 448px;
    line-height: 22px;
  }

  @media (max-width: 900px) {
    p {
      width: auto;
      padding: 2rem;
    }
  }
`;

export const BlurBall = styled.div`
  background: rgba(78, 96, 131, 0.5);
  filter: blur(140px);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid red;
  width: 490px;
  height: 490px;

  @media (max-width: 900px) {
    display: none;
  }
`;
