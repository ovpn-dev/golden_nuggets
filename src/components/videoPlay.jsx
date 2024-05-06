import React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import videoFile from "../assets/4_5888764320208131274.mp4";

const VideoPlayer = () => {
  return (
    <AspectRatio maxW="640px" ratio={16 / 9}>
      <Box
        as="video"
        controls
        src={videoFile}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </AspectRatio>
  );
};

export default VideoPlayer;
