import React from 'react';
import { Box, Heading, Text, SimpleGrid, Link } from '@chakra-ui/react';

const Projects = () => {
    const projects = [
        {
            name: 'Hotel Website',
            description: 'A website for booking hotel rooms.',
            technologies: 'React, CSS, HTML',
            link: '#'
        },
        {
            name: 'Voting Dapp',
            description: 'A decentralized application for voting.',
            technologies: 'Solidity, Web3.js, React',
            link: '#'
        },
        {
            name: 'Mau SUG Voting System',
            description: 'A voting system for the Modibbo Adama University Student Union Government.',
            technologies: 'React, Node.js, MongoDB',
            link: '#'
        },
        {
            name: 'Todo List App',
            description: 'A simple app to manage your daily tasks.',
            link: '#'
        },
        {
            name: 'Weather App',
            description: 'Get the latest weather information for your location.',
            link: '#'
        },
        {
            name: 'Calculator App',
            description: 'A basic calculator to perform simple arithmetic operations.',
            link: '#'
        },
        {
            name: 'Currency Converter',
            description: 'Convert currencies with the latest exchange rates.',
            link: '#'
        },
        {
            name: 'Recipe Finder',
            description: 'Discover new recipes and save your favorites.',
            link: '#'
        },
        {
            name: 'Note-taking App',
            description: 'Take notes, organize them, and sync across devices.',
            link: '#'
        },
        {
            name: 'Random Quote Generator',
            description: 'Get inspired with random quotes from famous personalities.',
            link: '#'
        },
        {
            name: 'Countdown Timer',
            description: 'Set timers for events and deadlines.',
            link: '#'
        },
        {
            name: 'BMI Calculator',
            description: 'Calculate your Body Mass Index (BMI) to assess your health.',
            link: '#'
        },
        {
            name: 'Mood Tracker',
            description: 'Track your mood and emotions over time.',
            link: '#'
        }
    ];

    return (
        <Box p="4" id="projects">
            <Heading as="h2" size="lg" mb="4">Projects</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {projects.map((project, index) => (
                    <Box key={index} border="1px solid" p="4" borderRadius="md">
                        <Heading as="h3" size="md" mb="2">{project.name}</Heading>
                        <Text mb="2">{project.description}</Text>
                        <Text mb="2"><strong>Technologies:</strong> {project.technologies}</Text>
                        <Link href={project.link} color="blue.500">View Project</Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Projects;
