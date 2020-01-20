import React from 'react';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Stacks from './components/stacks/stacks.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';


export default function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Projects />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  )
};