import { Box, AspectRatio } from "@chakra-ui/react";

const AboutVideo = () => {
  return (
    <Box rounded="xl" shadow="sm">
      <AspectRatio ratio={16 / 9}>
        <Box position="relative" h="100%" w="100%">
          <iframe
            src="https://iframe.cloudflarestream.com/ebbf0cf114d2eb7cce51cccadff25482?preload=metadata"
            title="Video Player"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </AspectRatio>
    </Box>
  );
};

export default AboutVideo;
