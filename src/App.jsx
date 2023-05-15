import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { CompletedTasks } from './components/CompletedTasks';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box h="100vh" overflow="hidden">
      <style>
        {`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          margin: none;
          background-image: url(https://franklincovey.com.uy/wp-content/uploads/2023/01/Como-evitar-una-to-do-list-interminable.png);
          background-repeat: no-repeat;
          background-position: 1rem;
        }
        `}
      </style>
      <Box
      >
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/completed-tasks" element={<CompletedTasks />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;