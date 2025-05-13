import React from 'react';
import Section from "@/app/components/utils/Section";

const items = [
  {
    imageUrl: '/images/product-1.png',
    price: '3 000',
    description: 'Qora va ko‘k rangli ruchka',
  },
  {
    imageUrl: '/images/product-2.png',
    price: '6000',
    description: 'Daftar',
  },
  {
    imageUrl: '/images/product-3.png',
    price: '2 000',
    description: 'O\'chirgich',
  },
  {
    imageUrl: '/images/product-4.png',
    price: '1 000',
    description: 'Batareyka',
  },
  {
    imageUrl: '/images/product-5.png',
    price: '2 000',
    description: 'Qalam yo\'ngich',
  },
  {
    imageUrl: '/images/product-6.png',
    price: '30 000',
    description: 'Hujjatlar uchun sumka',
  },
  {
    imageUrl: '/images/product-7.png',
    price: '5 000',
    description: 'Qalamlar',
  },
  {
    imageUrl: '/images/product-8.png',
    price: '3 000',
    description: 'Stikerlar',
  },
]

function ProductsSection() {
  return (
    <Section className='pt-[80px]' id='products'>
      <div className='md:w-full lg:flex md:justify-between md:items-center md:gap-10'>
        <h1 className='text-[24px] font-medium xl:font-normal xl:text-[56px]'>Mahsulotlar<span className='text-primary'>?</span></h1>
        <p className='text-secondary text-[12px] font-semibold xl:font-normal xl:text-[18px] max-w-[660px]'>Ana endi siz bizdagi mavjud barcha mahsulotlarni ko‘rib chiqishingiz mumkin bo‘ladi, faqat shoshilmang, batafsil ko‘rib chiqing.</p>
      </div>
      <div className='grid grid-cols-2 place-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 mt-5'>
        {items.map((item, index) => (
          <div key={index}>
            <div className='rounded-[12px] max-w-[170px] h-[228px] xl:h-[427px] xl:max-h-[427px] xl:max-w-[320px] overflow-hidden bg-[#F9F5F5]'>
              <img src={item.imageUrl} alt="product-image" className='bg-[#F9F5F5] object-contain w-full h-full scale-100'/>
            </div>
            <h1 className='text-[18px] font-normal xl:text-[20px] xl:font-semibold mt-[8px]'>{item.price} so'm</h1>
            <p className='text-[12px] xl:text-base font-normal text-secondary line-clamp-1'>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ProductsSection;