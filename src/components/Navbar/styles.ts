import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  /* background-color: var(--light-blue); */

  width: 70%;
  height: 80px;
  z-index: 1000;
  strong {
    color: white;
    font-family: "Rajdhani";
    font-size: 1.5rem;
  }

  span {
    color: var(--green);
    font-family: "Rajdhani";
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  button {
    background: transparent;
    cursor: pointer;

    img {
      width: 2rem;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  a {
    position: relative;
    text-decoration: none;
    color: white;
    padding: 0 10px;
  }

  a:after {
    content: "";
    position: absolute;
    background-color: var(--green);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  a:hover:after {
    width: 100%;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100%;
  top: 100%;
  transform: translateX(-250%);
  text-align: center;
  box-shadow: 0 0 0.8 rgb(0, 0, 0);
  > a {
    text-decoration: none;
    color: white;
    width: 250%;
    padding: 10px;
    background: var(--light-blue);
  }
`;
