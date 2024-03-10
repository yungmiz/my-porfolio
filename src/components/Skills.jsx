// src/components/Skills.jsx
import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { VscArrowSmallRight } from 'react-icons/vsc';

const Skills = () => {
    const skills = [
        'React', 
        'Node.js', 'Express', 'Python',
        'MongoDB', 'MySQL', 'PostgreSQL',
        'Git', 'RESTful APIs', 'GraphQL',
        'Chakra UI', 
        'Solidity'
    ];

    return (
        <Box p="4" id="skills">
            <Text fontSize="2xl" mb="4">Skills</Text>
            <SimpleGrid columns={3} spacing={4}>
                {skills.map(skill => (
                   <Box key={skill} display="flex" alignItems="center" ml="30">
                        <VscArrowSmallRight fontSize="30px" />
                        <Text fontFamily="body" ml="2" fontSize="xl">{skill}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Skills;
