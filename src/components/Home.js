import React from 'react';
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
          <img className="imageOne" alt="" src={ImageOne} />
          <img className="imageTwo" alt="" src={ImageTwo} />
          <img className="imageThree" alt="" src={ImageThree} />
        </Carousel>

        <h2 className="welcome">Manage your money with ease</h2>
      </div>
  )
}

export default Home;
