import React, { Component } from 'react';
import ImageOne from '../images/imageOne.png';
import ImageTwo from '../images/imageTwo.jpg';
import ImageThree from '../images/imageThree.jpg';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function Home() {
  return (
      <div>
        <Carousel className="carouselStyle"
          animationSpeed={1500}
          autoPlay={3000}
          stopAutoPlayOnHover
          infinite
        >
          <img className="imageOne" src={ImageOne} />
          <img className="imageTwo" src={ImageTwo} />
          <img className="imageThree" src={ImageThree} />
        </Carousel>
        <br/>
        <h2 className="welcome">Manage your money with ease</h2>
      </div>
  )
}

export default Home;
