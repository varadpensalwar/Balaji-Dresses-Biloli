import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width:100%;
  height:100vh;
  position:relative;

  video{
    width:100%;
    height:100vh;
    object-fit:cover;

    @media(max-width:48em){
      object-position:center 10%;
    }

    @media(max-width:30em){
      object-position:center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position:absolute;
  inset:0;
  z-index:1;
  background:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position:absolute;
  inset:0;
  z-index:5;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:${props=>props.theme.text};
  padding:1rem;

  .title-wrapper{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    flex-wrap:wrap;
    text-align:center;
  }

  h1{
    font-family:"Kaushan Script";
    font-size:clamp(2rem,8vw,${props=>props.theme.fontBig});
    text-shadow:1px 1px 1px ${props=>props.theme.body};
    margin:0;
    line-height:1;
  }

  h2{
    margin-top:1rem;
    text-align:center;
    padding:0 1rem;
    font-size:${props=>props.theme.fontlg};
    font-family:"Sirin Stencil";
    text-shadow:1px 1px 1px ${props=>props.theme.body};

    @media(max-width:30em){
      font-size:${props=>props.theme.fontsm};
    }
  }

  @media(max-width:30em){
    .title-wrapper{
      flex-direction:column;
      gap:1rem;
    }
  }
`;

const container={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      delayChildren:5,
      staggerChildren:0.3
    }
  }
};

const item={
  hidden:{opacity:0},
  show:{opacity:1}
};

export default function CoverVideo(){
  return(
    <VideoContainer data-scroll>
      <DarkOverlay/>

      <Title variants={container} initial="hidden" animate="show">
        <div
          className="title-wrapper"
          data-scroll
          data-scroll-speed="4"
        >
          {"Balaji Dresses Biloli".split(" ").map((word,index)=>(
            <motion.h1
              key={index}
              variants={item}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        <motion.h2
          variants={item}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Gandhi Chowk, Biloli, Maharashtra - 431710
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
}