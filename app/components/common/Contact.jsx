'use client'
import React, {useRef, useState} from 'react';
import Section from "@/app/components/utils/Section";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css'
import {Controller, useForm} from "react-hook-form";



function Contact() {
  const items = [
    {
      icon: <PhoneIcon />,
      title: 'Telefon raqam',
      value: '+998 33 513-6053'
    },
    {
      icon: <ClockIcon />,
      title: 'Ish vaqti',
      value: '08:30 - 19:30'
    },
    {
      icon: <LocationDotIcon />,
      title: 'Manzil',
      value: 'Urganch shahar, qaysidir mahalla f...'
    },
    {
      icon: <TimeIcon />,
      title: 'Ish kunlari',
      value: 'Dushanba - Yakshanba'
    }
  ]

  const { control, handleSubmit, reset } = useForm()
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false)

  const onSubmit = (values) => {
    console.log(values)
    setIsContactFormSubmitted(true)
    reset()
  }

  return (
    <Section className='flex flex-col items-center justify-center gap-5 py-[80px]' id='contact'>
      <div className='md:w-full lg:flex md:justify-between md:items-center'>
        <h1 className='text-[24px] font-medium xl:font-normal xl:text-[56px]'>Bog‘lanish<span className='text-primary'>?</span></h1>
        <p className='text-secondary text-[12px] font-medium xl:font-normal xl:text-[18px] max-w-[660px]'>Biz bilan qanday bog‘lanishingizni va manzilimizni qanday topib
          borishni siz endi
          juda yaxshi bilasiz, shunchaki qo‘ng‘iroq qiling yoki manzil bo‘yicha keling</p>
      </div>
      <div className='w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11943.218987695105!2d60.60499628346599!3d41.55182468059247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1746941744257!5m2!1sru!2s"
          className='w-full h-[650px] lg:h-[450px] rounded-[12px]'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-5 2xl:flex-row'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          className="!w-full !h-full contacts-slider lg:!grid lg:!grid-cols-2 lg:!gap-5 lg:!grid-rows-2 lg:!content-start"
          breakpoints={{
            1024: {
              enabled: false
            },
            620: {
              slidesPerView: 2,
            }
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#F9F5F5] !w-full p-4 rounded-[12px] flex flex-col items-start justify-center gap-2"
            >
              <h1 className="flex items-center gap-2 text-xl font-semibold">
                {item.icon}
                {item.title}
              </h1>
              <p className="text-sm text-secondary line-clamp-1">{item.value}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <form className='flex flex-col items-center justify-center gap-5 w-full' id='contact-form'
              onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col items-center justify-center gap-5 w-full 2xl:flex-row'>
            <Controller
              name='name'
              control={control}
              defaultValue=''
              rules={{
                required: true,
              }}
              render={({field}) => (
                <Input {...field} name='Name' placeholder='Ismingiz' type='text' />
              )}
            />
            <Controller
              name='phone_number'
              control={control}
              defaultValue=''
              rules={{
                required: true,
              }}
              render={({field}) => (
                <Input {...field} name='Phone number' placeholder='+998 00 000 00 00' type='text' />
              )}
            />
          </div>
          <Controller
            name='note'
            control={control}
            defaultValue=''
            render={({field}) => (
              <textarea {...field} name='note' placeholder='Qo‘shimcha izohingiz (bu ixtiyoriy)'
                        className='px-5 py-3 bg-[#F9F5F5] w-full min-h-28 max-h-60 rounded-[12px]' />
            )}
          />

        </form>
      </div>
      <div className='w-full flex flex-col gap-5 items-center justify-center xl:items-end'>
        <Button className='bg-primary w-[320px] cursor-pointer' form='contact-form' type='submit'>Yuborish</Button>
        {isContactFormSubmitted && (
          <h1>Xabaringiz yuborildi!</h1>
        )}
      </div>
    </Section>
  )
    ;
}

const PhoneIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_58_493)">
      <path
        d="M9 3C9.17928 2.99995 9.35528 3.0481 9.50957 3.13941C9.66386 3.23071 9.79076 3.36182 9.877 3.519L9.928 3.629L11.928 8.629C12.0086 8.83016 12.0216 9.05204 11.9651 9.26125C11.9087 9.47045 11.7858 9.65566 11.615 9.789L11.515 9.857L9.841 10.861L9.904 10.964C10.7008 12.229 11.771 13.2992 13.036 14.096L13.138 14.158L14.143 12.486C14.2544 12.3001 14.4231 12.1554 14.6239 12.0737C14.8246 11.992 15.0464 11.9777 15.256 12.033L15.371 12.072L20.371 14.072C20.5375 14.1384 20.6831 14.2484 20.7925 14.3903C20.9019 14.5323 20.9712 14.7011 20.993 14.879L21 15V19C21 20.657 19.657 22 17.94 21.998C9.361 21.477 2.522 14.638 2 6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z"
        fill="#9F9191"/>
    </g>
    <defs>
      <clipPath id="clip0_58_493">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

const ClockIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_58_500)">
      <path
        d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM12 5.99989C11.7551 5.99992 11.5187 6.08985 11.3356 6.25261C11.1526 6.41537 11.0357 6.63964 11.007 6.88289L11 6.99989V11.9999L11.009 12.1309C11.0318 12.3044 11.0997 12.4689 11.206 12.6079L11.293 12.7079L14.293 15.7079L14.387 15.7899C14.5624 15.926 14.778 15.9998 15 15.9998C15.222 15.9998 15.4376 15.926 15.613 15.7899L15.707 15.7069L15.79 15.6129C15.9261 15.4375 15.9999 15.2219 15.9999 14.9999C15.9999 14.7779 15.9261 14.5623 15.79 14.3869L15.707 14.2929L13 11.5849V6.99989L12.993 6.88289C12.9643 6.63964 12.8474 6.41537 12.6644 6.25261C12.4813 6.08985 12.2449 5.99992 12 5.99989Z"
        fill="#9F9191"/>
    </g>
    <defs>
      <clipPath id="clip0_58_500">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>

)

const LocationDotIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_58_507)">
      <path
        d="M18.364 4.63606C20.0163 6.28819 20.9613 8.51817 20.9992 10.8545C21.0371 13.1908 20.1649 15.4502 18.567 17.1551L18.364 17.3651L14.121 21.6071C13.5826 22.1451 12.8599 22.4584 12.0991 22.4834C11.3384 22.5085 10.5966 22.2435 10.024 21.7421L9.87999 21.6071L5.63599 17.3641C3.94816 15.6762 2.99994 13.387 2.99994 11.0001C2.99994 8.61309 3.94816 6.32389 5.63599 4.63606C7.32383 2.94822 9.61303 2 12 2C14.387 2 16.6762 2.94822 18.364 4.63606ZM12 8.00006C11.606 8.00006 11.2159 8.07765 10.8519 8.22842C10.488 8.37918 10.1572 8.60016 9.87867 8.87873C9.6001 9.15731 9.37912 9.48803 9.22836 9.85201C9.07759 10.216 8.99999 10.6061 8.99999 11.0001C8.99999 11.394 9.07759 11.7841 9.22836 12.1481C9.37912 12.5121 9.6001 12.8428 9.87867 13.1214C10.1572 13.4 10.488 13.6209 10.8519 13.7717C11.2159 13.9225 11.606 14.0001 12 14.0001C12.7956 14.0001 13.5587 13.684 14.1213 13.1214C14.6839 12.5588 15 11.7957 15 11.0001C15 10.2044 14.6839 9.44134 14.1213 8.87873C13.5587 8.31613 12.7956 8.00006 12 8.00006Z"
        fill="#9F9191"/>
    </g>
    <defs>
      <clipPath id="clip0_58_507">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

const TimeIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_58_514)">
      <path
        d="M17 2C17.5046 1.99984 17.9906 2.19041 18.3605 2.5335C18.7305 2.87659 18.9572 3.34684 18.995 3.85L19 4V6C19.0005 7.20793 18.6883 8.39542 18.0937 9.44687C17.4991 10.4983 16.6424 11.3779 15.607 12C16.6031 12.5982 17.4344 13.4351 18.0259 14.4352C18.6175 15.4353 18.9505 16.5669 18.995 17.728L19 18V20C19.0002 20.5046 18.8096 20.9906 18.4665 21.3605C18.1234 21.7305 17.6532 21.9572 17.15 21.995L17 22H7C6.49542 22.0002 6.00943 21.8096 5.63945 21.4665C5.26947 21.1234 5.04284 20.6532 5.005 20.15L5 20V18C4.99946 16.7921 5.31168 15.6046 5.90628 14.5531C6.50088 13.5017 7.35758 12.6221 8.393 12C7.39692 11.4018 6.56558 10.5649 5.97406 9.56479C5.38254 8.56473 5.04949 7.43305 5.005 6.272L5 6V4C4.99984 3.49542 5.19041 3.00943 5.5335 2.63945C5.87659 2.26947 6.34685 2.04284 6.85 2.005L7 2H17Z"
        fill="#9F9191"/>
    </g>
    <defs>
      <clipPath id="clip0_58_514">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default Contact;