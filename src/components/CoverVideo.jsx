import React, { useState } from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import HeroPoster from "../assets/Images/hero-poster.webp";

const VideoContainer = styled.section`
  width:100%;
  height:100vh;
  position:relative;

  video{
    position:absolute;
    inset:0;
    width:100%;
    height:100vh;
    object-fit:cover;
    opacity:0;
    transition:opacity 0.4s ease;

    &.is-ready{
      opacity:1;
    }

    @media(max-width:48em){
      object-position:center 10%;
    }

    @media(max-width:30em){
      object-position:center 50%;
    }
  }
`;

const PosterImage = styled.img`
  position:absolute;
  inset:0;
  width:100%;
  height:100vh;
  object-fit:cover;
  opacity:${props=>props.$isHidden ? 0 : 1};
  transition:opacity 0.4s ease;

  @media(max-width:48em){
    object-position:center 10%;
  }

  @media(max-width:30em){
    object-position:center 50%;
  }
`;

const DarkOverlay = styled.div`
  position:absolute;
  inset:0;
  z-index:1;
  background:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled.div`
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
    transform:translateY(0.35rem);
    animation:reveal-title-word 0.6s ease forwards;
  }

  h1:nth-child(1){
    animation-delay:0.4s;
  }

  h1:nth-child(2){
    animation-delay:0.58s;
  }

  h1:nth-child(3){
    animation-delay:0.76s;
  }

  h2{
    margin-top:1rem;
    text-align:center;
    padding:0 1rem;
    font-size:${props=>props.theme.fontlg};
    font-family:"Sirin Stencil";
    text-shadow:1px 1px 1px ${props=>props.theme.body};
    transform:translateY(0.35rem);
    animation:reveal-title-word 0.6s ease 0.94s forwards;

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

  @keyframes reveal-title-word {
    to {
      transform:translateY(0);
    }
  }
`;

export default function CoverVideo(){
  const [isVideoReady, setIsVideoReady] = useState(false);

  return(
    <VideoContainer data-scroll>
      <PosterImage
        src={HeroPoster}
        alt=""
        aria-hidden="true"
        width="1141"
        height="2276"
        fetchPriority="high"
        decoding="async"
        $isHidden={isVideoReady}
      />
      <DarkOverlay/>

      <Title>
        <div
          className="title-wrapper"
          data-scroll
          data-scroll-speed="4"
        >
          {"Balaji Dresses Biloli".split(" ").map((word,index)=>(
            <h1 key={index}>
              {word}
            </h1>
          ))}
        </div>

        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Gandhi Chowk, Biloli, Maharashtra - 431710
        </h2>
      </Title>

      <video
        src={MainVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HeroPoster}
        className={isVideoReady ? "is-ready" : ""}
        onCanPlay={() => setIsVideoReady(true)}
      />
    </VideoContainer>
  );
}
