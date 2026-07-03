import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;
  opacity: ${(props) => (props.$isExiting ? 0 : 1)};
  transform: ${(props) => (props.$isExiting ? 'translateY(100%)' : 'translateY(0)')};
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
        animation: draw-star 1.1s ease-in-out forwards;
        opacity: 0;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
      }
    }
  }

  @keyframes draw-star {
    from {
      opacity: 0;
      stroke-dashoffset: 1;
    }
    to {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;
  animation: pulse-loader-text 0.7s ease-in-out infinite alternate;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }

  @keyframes pulse-loader-text {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Loader = ({ isExiting = false }) => {
  return (
    <Container $isExiting={isExiting}>
      {/* <img src={star} alt="Balaji Dresses Biloli" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g>
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </g>
      </svg>
      <Text>Balaji Dresses Biloli</Text>
    </Container>
  );
};

export default Loader;
