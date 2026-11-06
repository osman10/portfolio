import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import imgOne from './../../public/images/slide/slideOne.png';
import imgTwo from './../../public/images/slide/slideTwo.png';
import imgThree from './../../public/images/slide/slideThree.png';
import imgFour from './../../public/images/slide/slideFour.png';

interface SlideData {
  id: number;
  image: StaticImageData;
  text: string;
}

export default function CarouselSlider(): React.JSX.Element {
  const slides: SlideData[] = [
    {
      id: 1,
      image: imgOne,
      text: 'As a versatile MERN stack developer, I architect end-to-end web solutions that seamlessly bridge robust backend architecture with responsive, high-performance user interfaces.',
    },
    {
      id: 2,
      image: imgTwo,
      text: 'My frontend development focuses on crafting intuitive, reactive user interfaces using React. I specialize in state management, component reusability, and fluid UI design',
    },
    {
      id: 3,
      image: imgThree,
      text: 'On the server side, I engineer secure, high-capacity backends powered by Node.js and Express. From designing clean RESTful APIs and implementing robust authentication to structuring flexible.',    },
    {
      id: 4,
      image: imgFour,
      text: 'Beyond just writing code, I am passionate about optimizing performance, writing clean, maintainable codebases, and bridging the gap between creative design and technical execution.',
    },
  ];


  return (
    <div className="w-full px-2 sm:px-4 mx-auto flex justify-center">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        className="w-full max-w-[600px] shadow-lg bg-white relative rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col bg-white">
              {/* Image Container with Navigation Arrows */}
              <div className="relative w-full h-[250px] sm:h-[350px]">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover"
                />

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button className="swiper-button-next-custom absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md transition-all">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 sm:p-8 bg-white border-t border-gray-100 gap-4 sm:gap-6">
                <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}