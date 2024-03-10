import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import profileImage from '../assets/Profile.jpg'; // Path to your image file

const MotionBox = motion(Box);

const About = () => {
    return (
        <Flex p="4" align="center" id="about">
            <MotionBox
                boxSize="200px" // Reduced frame size to 200px
                bg="gray.200"
                borderRadius="50%"
                overflow="hidden"
                mr="4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={profileImage}
                    alt="Profile Picture"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </MotionBox>
            <Box flex="1">
                <Text fontSize="3xl"  mb="2">About Me</Text>
                <Text fontSize="xl" fontFamily="body" textAlign="justify">
                    Pascal Ally Ahmadu is a software developer with a passion for frontend development and a basic understanding of backend. He holds a Master of Technology (M.Tech) degree in Computer Science, specializing in Blockchain Technology.

                    In his work, he creates user-friendly applications and designs innovative interfaces to solve real-world problems. He is constantly learning new technologies to stay updated and contribute to the advancement of the field.
                </Text>
            </Box>
        </Flex>
    );
};

export default About;
