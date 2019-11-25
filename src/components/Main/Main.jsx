import React, { Component } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer'


export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
}