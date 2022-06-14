import styled from "styled-components";

interface ContainerProps {
  topButton: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;

  > a {
    /* visibility: ${(props) => (props.topButton ? "visible" : "hidden")}; */
    display: flex;
    opacity: ${(props) => (props.topButton ? "1" : "0")};
    justify-content: center;
    align-items: center;
    visibility: visible;
    position: fixed;
    bottom: 10%;
    right: 5%;
    height: 50px;
    width: 40px;

    text-decoration: none;

    transition: opacity 0.6s;

    font-size: 3rem;
    background-color: var(--green);
    border-radius: 20%;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
    color: black;
  }
`;
