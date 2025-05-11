import React from 'react';
import Section from "@/app/components/utils/Section";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

const items = ['O‘z biznesingizni boshlamoqchi bo‘lsangiz', 'Biror bir chet tilini o‘rganmoqchi bo‘lsangiz', 'Xullas shunga o’xshash nimadirlarni xoxlasangiz']

function CTASection() {
  return (
    <Section className='bg-[#0C0B0B] pt-10 px-0 lg:flex overflow-hidden lg:items-end lg:justify-between lg:!pr-0' id='cta'>
      <div className='px-5 text-secondary flex items-start justify-center flex-col gap-5 pb-20'>
        <h1 className='text-white text-2xl font-medium'>Orzuyingizdagi hayot tarzini qurmoqchi bo‘lsangiz, nima
          kerakligini bilasizmi?</h1>
        <p>Agar siz quyidagilarni orzu qilgan bo‘sangiz, unutmang orzu orzuligicha qolmasligi kerak. Orzu amalga oshishi
          uchun, harakat qilish kerak.</p>
        <ul>
          {items.map((item, index) => (
            <li className='flex items-center justify-start gap-3' key={index}>
              <CheckIcon/>
              {item}
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center gap-5 w-full'>
          <Link className='w-full h-full' href='#products'>
            <Button className='bg-primary cursor-pointer'>Mahsulotlar</Button>
          </Link>
          <Link className='w-full h-full' href='#contact'>
            <Button className='bg-[#221F1F]'>Bog'lanish</Button>
          </Link>
        </div>
      </div>
      <img src="/images/cta-img-for-mobile.png" alt="cta-img" className='bg-[#0C0B0B] block lg:hidden w-full'/>
      <img src="/images/cta-img.png" alt="cta-img" className=' bg-[#0C0B0B] hidden lg:block object-cover w-6/12'/>
    </Section>

  );
}

const CheckIcon = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_91_1886)">
      <path
        d="M4.16663 10L8.33329 14.1667L16.6666 5.83337"
        stroke="#0AA840"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_91_1886">
        <rect width={20} height={20} fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default CTASection;