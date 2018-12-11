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
    this.prevOrNext = this.prevOrNext.bind(this);
    this.showSlide = this.showSlide.bind(this);
  }
  
  componentDidMount() {
    this.showSlide(this.state.slideIndex);
  }

  //bug in showSlides
  //conditionals are not doing what they are suppose to
  //fix this shit you ding dong

  showSlide(slideIndex) {
    let slides = document.getElementsByClassName('imageSlide');
    this.setState({
      slideIndex: slideIndex
    });
    
    if (slideIndex > slides.length) {
      this.setState({
        slideIndex: 1
      });
      console.log('the state ', this.state.slideIndex)
    }
    if (slideIndex < 1) {
      this.setState({
        slideIndex: slides.length
      });
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    console.log('the index before execute ', this.state.slideIndex);
    slides[this.state.slideIndex - 1].style.display = 'block';
  }
  
  prevOrNext(check) {
    console.log('the slide index in prevOrNext ', this.state.slideIndex + check);
    this.showSlide(this.state.slideIndex + check);
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
          <Applications number={this.state.slideIndex} onClick={this.prevOrNext}/>
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