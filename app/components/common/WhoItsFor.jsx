'use client'
import React from 'react';
import Section from "@/app/components/utils/Section";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";

const cards = [
  {
    imgUrl: '/images/whoitsfor-card-1.png',
    label: 'Mijoz / Biznesmen',
    description: 'Tadbirkorlar bizni tez-tez yo‘qlab turishadi'
  },
  {
    imgUrl: '/images/whoitsfor-card-2.png',
    label: 'Mijoz / Maktab o\'quvchilari',
    description: 'Maktab o‘quvchilari bizning doimiy mijozlarimizdandir'
  },
  {
    imgUrl: '/images/whoitsfor-card-3.png',
    label: 'Mijoz / Har qanday hodimlar',
    description: 'Hodimlar  ishga doir narsalarni bizda topishadi'
  },
  {
    imgUrl: '/images/whoitsfor-card-4.png',
    label: 'Mijoz / Va boshqalar',
    description: 'Boshqa kishilar ham bazida narsa olib turishadi'
  },
]

function WhoItsFor() {
  return (
    <Section className='py-16' id='who-its-for'>
      <h1 className='text-2xl'>Biz kimga kerakmiz<span className='text-primary'>?</span></h1>
      <Swiper
        modules={[ Autoplay ]}
        spaceBetween={20}
        slidesPerView='1'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='mt-5 h-96'
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          670: {
            slidesPerView: 2,
          }
        }}
      >
        {cards.map((card, i) => (
            <SwiperSlide
              key={i}
              className="w-[320px] h-96 bg-cover bg-no-repeat bg-center flex-col items-start justify-end p-3 text-white rounded-lg"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.15) 15%, rgba(0,0,0,1) 100%), url(${card.imgUrl})`,
                display: 'flex',
              }}
            >
              <p className='font-light'>{card.label}</p>
              <h1 className="text-xl font-medium">{card.description}</h1>
            </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default WhoItsFor;