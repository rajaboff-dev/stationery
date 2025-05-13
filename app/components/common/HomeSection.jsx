import React from 'react';
import Section from "@/app/components/utils/Section";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

function HomeSection() {
  return (
    <Section className='home w-full h-[700px] xl:h-[89vh] flex flex-col justify-center items-center text-center gap-5 xl:px-[200px] bg-cover 2xl:bg-size-[100%] xl:gap-10 text-white xl:pb-32' id='home'>
      <h1 className='text-[36px] font-medium xl:font-normal xl:text-[78px] text-white xl:leading-[112px] w-full'>Qog‘oz, daftar yoki ruchka qaysi biri sizga kerak bo‘lyabdi</h1>
      <p className='w-full text-[18px] font-normal'>Iloji boricha shoshiling, chunki bizda hammasi bor, narxi<br /> ham ancha arzon. yana o‘ziz bilasiz biz majburlamaymiz</p>
      <div className='flex items-center justify-center gap-5 w-full md:w-80'>
        <Link className='w-full h-full' href='#products'>
          <Button className='bg-primary border-primary cursor-pointer'>Mahsulotlar</Button>
        </Link>
        <Link className='w-full h-full' href='#contact'>
          <Button className='border border-white cursor-pointer'>Bog'lanish</Button>
        </Link>
      </div>
    </Section>
  );
}

export default HomeSection;