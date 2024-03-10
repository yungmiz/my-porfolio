import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Experience = () => {
    const experiences = [
        {
            company: 'CyberData Automations Limited',
            position: 'Frontend Developer Intern',
            duration: 'March 2019 - October 2021',
            description: 'Worked as a Frontend Developer intern at CyberData Automations Limited, learning to write code under mentorship.'
        },
        {
            company: 'Modibbo Adama University Yola',
            position: 'Software Developer',
            duration: 'October 2021 - Present',
            description: 'Currently working as a Software Developer at Modibbo Adama University Yola, developing the university voting system.'
        }
    ];

    return (
        <Box p="4" id="experience">
            <Text as="h2" fontSize="2xl" mb="4" fontFamily="sans-serif">Experience</Text>
            {experiences.map((experience, index) => (
                <Box key={index} mb="4">
                    <Text fontSize="xl" fontFamily="sans-serif">{experience.position}</Text>
                    <Text fontSize="lg" fontFamily="sans-serif">{experience.company}</Text>
                    <Text fontSize="md" fontFamily="sans-serif">{experience.duration}</Text>
                    <Text fontFamily="sans-serif">{experience.description}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Experience;
