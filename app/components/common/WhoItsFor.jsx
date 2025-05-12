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
    <Section className='py-[64px] xl:py-[80px]' id='who-its-for'>
      <h3 className='text-[24px] xl:text-[56px] font-normal'>Biz kimga kerakmiz<span className='text-primary'>?</span></h3>
      <Swiper
        modules={[ Autoplay ]}
        spaceBetween={20}
        slidesPerView='1'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='mt-5 h-[427px]'
        breakpoints={{
          1024: {
            slidesPerView: 4,
            enabled:false
          },
          670: {
            slidesPerView: 2,
          }
        }}
      >
        {cards.map((card, i) => (
            <SwiperSlide
              key={i}
              className="w-[320px] h-[427px] bg-cover bg-no-repeat bg-center flex-col items-start justify-end p-5 text-white rounded-[12px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.01) 15%, rgba(0,0,0,1) 110%), url(${card.imgUrl})`,
                display: 'flex',
              }}
            >
              <p className='font-normal text-base'>{card.label}</p>
              <h1 className="text-[20px] font-semibold">{card.description}</h1>
            </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default WhoItsFor;