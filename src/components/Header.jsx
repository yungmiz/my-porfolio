import React, { useState } from 'react';
import { Center, Link, Stack } from '@chakra-ui/react';
import { animateScroll as scroll, scroller } from 'react-scroll';

const Header = () => {
    const [selected, setSelected] = useState('about');

    const handleLinkClick = (id) => {
        setSelected(id);
        scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -100, // Adjust the scroll offset as needed
        });
    };

    return (
        <Center as="header" p="4" position="fixed" top="0" left="0" right="0" zIndex="999">
            <Stack direction="row" spacing={8}>
                <Center>
                    <Link
                        href="#about"
                        onClick={() => handleLinkClick('about')}
                        borderBottom={selected === 'about' ? '2px solid black' : 'none'}
                        fontSize="xl"
                        px={2}
                    >
                        About
                    </Link>
                    <Link
                        href="#skills"
                        onClick={() => handleLinkClick('skills')}
                        borderBottom={selected === 'skills' ? '2px solid black' : 'none'}
                        fontSize="xl"
                        px={2}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#experience"
                        onClick={() => handleLinkClick('experience')}
                        borderBottom={selected === 'experience' ? '2px solid black' : 'none'}
                        fontSize="xl"
                        px={2}
                    >
                        Experience
                    </Link>
                    <Link
                        href="#projects"
                        onClick={() => handleLinkClick('projects')}
                        borderBottom={selected === 'projects' ? '2px solid black' : 'none'}
                        fontSize="xl"
                        px={2}
                    >
                        Projects
                    </Link>
                </Center>
            </Stack>
        </Center>
    );
};

export default Header;
