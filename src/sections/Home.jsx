import React from 'react';
import styled from 'styled-components';

import CoverVideo from '../components/CoverVideo';
import Navbar from '../components/Navbar';
import Logo from './../components/Logo';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
overflow: hidden;

`;

const Home = () => {
  return (
    <Section  id="home">
      <Logo />
      <Navbar />
      <CoverVideo />
    </Section>
  );
};

export default Home;
