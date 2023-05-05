import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { CompletedTasks } from './components/CompletedTasks';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
        </Routes>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;