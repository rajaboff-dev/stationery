import React from 'react';
import Section from "@/app/components/utils/Section";

const items = [
  {
    imageUrl: '/images/category-1.png',
    title: 'Qalam va ruchkalar',
    description: 'Judayam ko‘p turdagi ruchka va qalam mahsulotlarini sotib olib, Vazifalaringizni bajaring yoki boshqa maqsadlarda foydalaning.',
    whoItsFor: 'Bolalar / O‘quvchilar / Hodimlar / Har qanday'
  },
  {
    imageUrl: '/images/category-2.png',
    title: 'Daftar va jurnal',
    description: 'Bizda siz xoxlagan daftarlar yoki jurnallar bor, ha aytgancha blaknot ham bor, buni nima qilaman deysizmi? Siz blaknotga qilishingiz kerak bo‘lgan ishlarni yozib chiqasi',
    whoItsFor: 'Bolalar / O‘quvchilar / Hodimlar / Har qanday'
  },
  {
    imageUrl: '/images/category-3.png',
    title: 'Qalam va ruchka uchun aksessuarlar',
    description: 'Qalam va ruchkalar uchun aksessuarlar, masalan, o‘chirgich, lineyka shu va shunga o‘xshash mahsulotlarni topishingiz mumkin',
    whoItsFor: 'Bolalar / O‘quvchilar / Hodimlar / Har qanday'
  },
  {
    imageUrl: '/images/category-4.png',
    title: 'Xodimlarga kerakli hamma narsa',
    description: 'Agar siz hodim bo‘lsangiz, shuni bilingki bizda hammasi bor, tayyor holatda, faqat sotib olsangiz bo‘lgani, faqat qulaylik olib keladi.',
    whoItsFor: 'Bolalar / O‘quvchilar / Hodimlar / Har qanday'
  },
]

function CategoriesSection() {
  return (
    <Section className='pt-[64px] xl:pt-[80px] flex flex-col items-center justify-start gap-5' id='categories'>
      <div className='lg:flex md:justify-between md:items-center md:w-full md:gap-10'>
        <h1 className='text-[24px] xl:text-[56px] text-base'>Kategoriya<span className='text-primary'>?</span></h1>
        <p className='text-secondary text-[12px] xl:text-base max-w-[660px]'>Qisqacha ko‘rib chiqishingiz kerak bo‘lgan kategoriyalarni
          siz bilan baham ko‘rmoqchiman. Ko‘rib tanishib chiqing.</p>
      </div>
      <div className='flex flex-col items-center justify-start gap-[32px]'>
        {items.map((item, i) => (
          <div
            className='flex flex-col items-center justify-start gap-3 lg:flex-row lg:gap-10 lg:justify-between w-full group'
            key={i}>
            <div className='h-36 w-full rounded-[12px] lg:w-[660px] lg:h-[248px] overflow-hidden'>
              <img src={item.imageUrl} alt="category-image"
                   className='object-cover object-top w-full h-full duration-200 group-hover:scale-105 group-hover:grayscale-100'/>
            </div>
            <div className='flex flex-col gap-3 lg:w-7/12 lg:gap-12'>
              <div className='flex flex-col gap-[8px]'>
                <h1 className='text-[20px] font-semibold xl:text-[36px] font-medium'>{item.title}</h1>
                <p className='text-secondary text-base font-normal'>{item.description}</p>
                <hr className='w-0 group-hover:w-full duration-200 bg-primary h-1 rounded-lg !border-none'/>
              </div>
              <h2 className='text-[#221F1F] xl:text-[#7A7070]'>{item.whoItsFor}</h2>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default CategoriesSection;