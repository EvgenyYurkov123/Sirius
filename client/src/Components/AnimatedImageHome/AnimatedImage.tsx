import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AnimatedImage = () => {
    return (
       
       <Flex justify={'center'}>

      
        <MotionBox
        display={'flex'}
        justifyContent={'center'}
            width="170px"
            height="70px"
            position="relative"
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
        >
            <Box
                width="100%"
                height="100%"
                bgImage="url('./logoHome.png')"
                bgSize="cover"
                bgPos="center"
                position="absolute"
                css={{ backfaceVisibility: "hidden" }}
            />
            <Box
                width="100%"
                height="100%"
                bgImage="url('./logoBack.png')"
                bgSize="cover"
                bgPos="center"
                position="absolute"
                transform="rotateY(180deg)"
                css={{ backfaceVisibility: "hidden" }}
            />
        </MotionBox>
        </Flex>
    );
};

export default AnimatedImage;
