import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: var(--dark-blue);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 85%;
  margin-top: 60px;

  > h1 {
    font-family: "Rajdhani";
    color: var(--green);
    font-size: 2rem;

    > img {
      width: 20px;
    }
  }

  @media (max-width: 420px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    h1 {
      text-align: center;
    }
  }
`;

export const ProjectsCardsContainer = styled.div`
  display: flex;
`;
