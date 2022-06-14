import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90px;
    cursor: pointer;
  }

  span {
    color: white;
    font-weight: 600;
  }

  img {
    margin: 15px 0;
    width: 70px;
    transition: width 0.3s;

    &:hover {
      width: 76px;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: var(--dark-blue);

  border-radius: 10px;
  position: relative;

  > span {
    position: absolute;
    font-size: 0.7rem;
    transform: translate(-50%, 70%);
  }
`;

export const Completed = styled.div`
  position: absolute;
  height: 10px;
  border-radius: 10px;
`;
