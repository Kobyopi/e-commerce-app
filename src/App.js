import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signup" element={<SignUpForm />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/contact" element={<ContactForm />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
};

export default App;

