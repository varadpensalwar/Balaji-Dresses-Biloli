import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
        animation: draw-logo-star 2s ease-in-out 0.2s forwards;
        opacity: 0;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
      }
    }
  }

  @keyframes draw-logo-star {
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
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  opacity: 0;
  transform: translateX(-50px);
  animation: reveal-logo-text 2s ease-in-out 0.6s forwards;

  @keyframes reveal-logo-text {
    to {
      opacity: 1;
      transform: translateX(-5px);
    }
  }
`;

const WhatsappIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    width="18"
    height="18"
    fill="#25D366"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const Logo = () => {
  return (
    <Container>
      <a href="#home" aria-label="Balaji Dresses Biloli home">
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
      </a>
      <span
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        style={{
          position: "fixed",
          right: "80px",
          top: "20px",
        }}
      >
        {" "}
        <a
          href="https://wa.me/919856447937?text=Hi%20Balaji%20Dresses,%20I%20want%20to%20know%20more."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Balaji Dresses on WhatsApp"
          title="Contact Balaji Dresses on WhatsApp"
        >
          <WhatsappIcon />
        </a>
      </span>
    </Container>
  );
};

export default Logo;
