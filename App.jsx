import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.component';
import Stacks from './components/stacks/stacks.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';


export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
};