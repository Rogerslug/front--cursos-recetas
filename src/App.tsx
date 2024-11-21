// ./App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.component';
import MainContent from './components/mainContent.component';
import ContentDetails from './components/contentDetails.component';
import Footer from './components/footer.component';
import Cursos from './components/courses.component';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/curso/:id" element={<ContentDetails />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
