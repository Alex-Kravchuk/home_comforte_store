import React, { useEffect, useRef, useState } from "react";

import videoContent from "../../../../../assets/videos/main_video.mp4";

import { Container } from "../../../../../styles/globalStyles";
import { MainVideoContent, MainVideoWrapper } from "./MainVideo.styled";

const MainVideo = () => {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    const playFunc = async () => {
      try {
        if (videoRef.current) {
          if (!playing) {
            await videoRef.current.pause();
          } else {
            await videoRef.current.play();
          }
        }
      } catch (error) {}
    };

    playFunc();
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
