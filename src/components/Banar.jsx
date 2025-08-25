"use client";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image5 from '../../public/image1.jpg'
import image6 from '../../public/image2.jpg'
import image7 from '../../public/image3.jpg'
import image8 from '../../public/image4.jpg'
import image9 from '../../public/image8.jpg'
import image1 from '../../public/image5.jpg'
import image2 from '../../public/image6.jpg'
import image3 from '../../public/image7.jpg'
import image4 from '../../public/image9.jpg'
import Image from 'next/image';

const Banar = () => {
  return (
    <div className="w-full">
      <Carousel autoPlay infiniteLoop dynamicHeight showThumbs={false}>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image1} 
            alt="banarPic1" 
            priority 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image8} 
            alt="banarPic2" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            placeholder='blur' 
            src={image3} 
            alt="banarPic3" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image5} 
            alt="banarPic5" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image6} 
            alt="banarPic6" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image4} 
            alt="banarPic4" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image7} 
            alt="banarPic4" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image2} 
            alt="banarPic4" 
          />
        </div>
        <div>
          <Image 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
            placeholder='blur'
            src={image9} 
            alt="banarPic4" 
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banar;
