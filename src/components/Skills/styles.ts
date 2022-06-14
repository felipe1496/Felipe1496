import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background: var(--light-blue);

  position: relative;

  justify-content: center;
  z-index: 999;
  overflow: hidden;

  > img {
    position: absolute;
    top: -136px;
    z-index: -1;
    width: 60%;
    height: 150%;
    right: 0;
    top: -136px;
    transform: translateX(15%);
    right: 0;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const SkillsContainer = styled.div`
  width: 70%;
  height: 85%;
  margin-top: 80px;
  h1 {
    font-size: 2rem;
    font-family: "Rajdhani";
    color: var(--green);

    > img {
      width: 20px;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const StackIcons = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 80%;
  grid-template-columns: repeat(3, 1fr);
`;
