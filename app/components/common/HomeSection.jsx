import React from 'react';
import Section from "@/app/components/utils/Section";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

function HomeSection() {
  return (
    <Section className='home w-full h-[89vh] flex flex-col justify-start items-center text-center gap-5 xl:px-80 xl:gap-10 text-white' id='home'>
      <h1 className='mt-64 text-4xl md:text-6xl text-white w-full'>Qog‘oz, daftar yoki ruchka qaysi biri sizga kerak bo‘lyabdi</h1>
      <p className='w-full'>Iloji boricha shoshiling, chunki bizda hammasi bor, narxi<br /> ham ancha arzon. yana o‘ziz bilasiz biz majburlamaymiz</p>
      <div className='flex items-center justify-center gap-5 w-full md:w-80'>
        <Link className='w-full h-full' href='#products'>
          <Button className='bg-primary cursor-pointer'>Mahsulotlar</Button>
        </Link>
        <Link className='w-full h-full' href='#contact'>
          <Button className='border border-white cursor-pointer'>Bog'lanish</Button>
        </Link>
      </div>
    </Section>
  );
}

export default HomeSection;