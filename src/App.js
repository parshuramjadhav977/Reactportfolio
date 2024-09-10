import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <Layout>
    <Home />
    <About />
    <Service />
    <Project />
    <Contact />
  </Layout>
);

export default App;
