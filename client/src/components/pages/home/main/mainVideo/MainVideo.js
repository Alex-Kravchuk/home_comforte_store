import React, { useEffect, useRef, useState } from "react";

import videoContent from "../../../../../assets/videos/main_video.mp4";

import { Container } from "../../../../../styles/globalStyles";
import { MainVideoContent, MainVideoWrapper } from "./MainVideo.styled";

const MainVideo = () => {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      if (!playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [playing]);

  const stopClickVideoHandler = () => setPlaying((state) => !state);

  return (
    <MainVideoWrapper>
      <Container>
        <MainVideoContent
          src={videoContent}
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          onClick={stopClickVideoHandler}
        />
      </Container>
    </MainVideoWrapper>
  );
};

export default MainVideo;
