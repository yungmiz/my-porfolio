import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

// Import your background image
import backgroundImage from './assets/Photo.jpg';

function App() {
  useEffect(() => {
    // Hide scrollbar by making it transparent
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = `${scrollbarWidth}px`;
    document.body.style.overflowY = 'scroll';
    document.body.style.scrollbarWidth = 'none';
  }, []);

  return (
    <ChakraProvider>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          overflowY: 'auto',
          paddingTop: '64px', // Add space equivalent to header height
          paddingRight: '16px', // Ensure content doesn't shift when scrollbar is hidden
        }}
      >
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </ChakraProvider>
  );
}

export default App;
