import React from 'react';
import Section from "./Section";
import { curve } from "../assets";


import Slider from 'react-slick';
import { companyLogos } from '../constants'; // Assuming companyLogos is an array of logo URLs
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4, // Show 4 logos at a time
  slidesToScroll: 1,    
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <section    className='bg-custom  '>
        <h2 className='text-center text-2xl text-bg  font-bold mb-2'>Seguros Patrimoniales</h2>
      <div  className='max-w-[1000px] mx-auto'>
        {/* Aquí agregamos la imagen como subrayado */}
        <img src={curve} alt="Subrayado" className="mx-auto " />
        <Slider {...settings}>
          {companyLogos.map((logo, index) => (
            <div key={index} className=''>
              <img src={logo} alt={`Logo ${index}`} className="w-52 h-52 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
