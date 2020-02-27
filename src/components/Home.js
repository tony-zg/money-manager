import React, { Component } from 'react';
import ImageOne from '../images/imageOne.png'
import ImageTwo from '../images/imageTwo.jpg'
import ImageThree from '../images/imageThree.jpg'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function Home() {
  return (
      <div>
        <Carousel
          animationSpeed={1500}
          autoPlay={3000}
          stopAutoPlayOnHover
          infinite
        >
          <img src={ImageOne} />
          <img src={ImageTwo} />
          <img src={ImageThree} />
        </Carousel>
        <br/>
        <h1 className="welcome">Welcome! Manage your money with ease</h1>
      </div>
  )
}

export default Home;
