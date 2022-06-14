import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const TopStripe = styled.div`
  width: 200px;
  height: 10px;
  border-radius: 10px 10px 0 0;
  background: var(--green);
`;

export const Stripe = styled.div``;

export const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  align-items: center;
  background: var(--light-blue);
  padding: 10px;
  border-radius: 7px;
  color: white;

  img {
    width: 250px;
    height: 180px;
    background-size: cover;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    height: 90px;
    width: 100%;
    margin-top: 10px;
    line-height: 22px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  /* a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    background: var(--dark-blue);
    margin-top: 30px;
    font-weight: 600;
    width: 80%;
    height: 40px;
    cursor: pointer;
    text-decoration: none;
  }

  a:before {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    background-color: var(--green);
    top: 0;
    left: 0;
    transition: width 0.7s;
  }

  a:hover:before {
    width: 30%;
  } */
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 40%;
  a {
    > img {
      width: 30px;
      height: 30px;
    }
  }
  img:hover {
    animation: bounce 2s ease-in-out;
  }
  @keyframes bounce {
    20%,
    60%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(-5px);
    }
  }
`;
