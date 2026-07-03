import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  /* left: 50%; */
  top: ${(props) => (props.$click ? '0' : `-${props.theme.navHeight}`)};
  transform: translateY(-100%);
  animation: reveal-nav 1.2s ease 0.6s forwards;
  transition: top 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 40em) {
    top: ${(props) => (props.$click ? '0' : `calc(-50vh - 4rem)`)};

  }

  @keyframes reveal-nav {
    to {
      transform: translateY(0);
    }
  }
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  border: none;
  outline: none;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;

  /* border-end-start-radius: 50%; */

  /* border-end-end-radius: 50%; */

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;

  }
`;

const MenuItems = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height: 50vh;
  }
`;

const Item = styled.li`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1) translateY(-5px);
  }

  &:active {
    transform: scale(0.9) translateY(0);
  }

  button {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-transform: inherit;
  }

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll?.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer $click={click}>
      <MenuItems>
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>
        <Item onClick={() => handleScroll('#home')}>
          {' '}
          <button type="button">Home</button>
        </Item>
        <Item onClick={() => handleScroll('.about')}>
          <button type="button">about</button>
        </Item>
        <Item onClick={() => handleScroll('#shop')}>
          <button type="button">shop</button>
        </Item>

        <Item onClick={() => handleScroll('.new-arrival')}>
          {' '}
          <button type="button">new arrival</button>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
