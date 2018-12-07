import React from 'react';
import Name from './Name.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Picture from './Picture.jsx';
import Contact from './Contact.jsx';
import Applications from './Applications.jsx';
import styled from 'styled-components';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.showSlide = this.showSlide.bind(this);
  }
  
  componentDidMount() {
    this.showSlide(this.state.slideIndex);
  }
  
  showSlide(slideIndex) {
    console.log('inside the showSide function');
    let i;
    let slides = document.getElementsByClassName('imageSlide');
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }
  
  handleClick(check) {
    this.showSlide(this.state.slideIndex += check);
  }

  render() {
    return (
      <Profile>
        <div>
          <Name />
        </div>
        <div>
          <Picture />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Applications number={this.state.slideIndex} onClick={this.handleClick}/>
        </div>
      <p>
        Header
      </p>
      </Profile>
    );
  }
}

const Profile = styled.div `
  background: ;
`;

export default App;