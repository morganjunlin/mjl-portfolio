import React, { useRef, useEffect, useState } from 'react';

import './App.css';

import productJSON from './components/projects/projects.js';

import Modal from './components/modal/modal.component'
import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.component';
import Stacks from './components/stacks/stacks.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  console.log(height, 'this is height of ', ele)
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function App() {
  const [visibleSection, setVisibleSection] = useState();
  const [showModal, setModal] = useState(false);
  const [modalID, setModalID] = useState(0);

  const modalRef = useRef();
  const homeRef = useRef(null);
  const navigationRef = useRef(null);
  const aboutRef = useRef(null);
  const stacksRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: 'home', ref: homeRef },
    { section: 'about', ref: aboutRef },
    { section: 'stacks', ref: stacksRef },
    { section: 'projects', ref: projectsRef },
    { section: 'contact', ref: contactRef },
  ];

  const handleModal = (i) => {
    setModal(prevState => !prevState);
    setModalID(i);
  }

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(navigationRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setVisibleSection('contact');
      } else if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <>
      <Modal 
        showModal={showModal} 
        handleModal={handleModal}
        project={productJSON[modalID]} 
      />
      <Header 
        getDimensions={getDimensions}
        homeRef={homeRef} 
        navigationRef={navigationRef}
        projectsRef={projectsRef} 
        scrollTo={scrollTo} 
      />
      <Navigation 
        visibleSection={visibleSection} 
        homeRef={homeRef} 
        navigationRef={navigationRef}
        aboutRef={aboutRef}
        stacksRef={stacksRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollTo={scrollTo} 
      />
      <Stacks stacksRef={stacksRef} />
      <Projects 
        projectsRef={projectsRef} 
        handleModal={handleModal} 
        productJSON={productJSON}
      />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} /> 
      <Footer />
    </>
  )
};