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
    <Section className='py-14 flex flex-col items-center justify-start gap-5' id='categories'>
      <div className='md:flex md:justify-between md:items-center md:w-full md:gap-10'>
        <h1 className='text-2xl'>Kategoriya<span className='text-primary'>?</span></h1>
        <p className='text-secondary max-w-[660px]'>Qisqacha ko‘rib chiqishingiz kerak bo‘lgan kategoriyalarni siz bilan baham ko‘rmoqchiman. Ko‘rib tanishib chiqing.</p>
      </div>
      <div className='flex flex-col items-center justify-start gap-5'>
        {items.map((item, i) => (
          <div className='flex flex-col items-center justify-start gap-3 md:flex-row md:gap-10 md:justify-between w-full' key={i}>
            <img src={item.imageUrl} alt="category-image" className='h-36 w-full object-cover object-top rounded-lg md:w-5/12 md:h-48'/>
            <div className='flex flex-col gap-3 md:w-7/12 md:gap-12'>
              <div>
                <h1 className='text-xl font-medium'>{item.title}</h1>
                <p className='text-secondary'>{item.description}</p>
              </div>
              <h2>{item.whoItsFor}</h2>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default CategoriesSection;