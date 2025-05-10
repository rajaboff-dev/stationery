import React from 'react';
import Section from "@/app/components/utils/Section";

const items = [
  {
    imageUrl: '/images/product-1.png',
    price: '3 000',
    description: 'Qora va ko‘k rangli ruchka',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '6000',
    description: 'Daftar',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '2 000',
    description: 'O\'chirgich',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '2 000',
    description: 'Qalam yo\'ngich',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '30 000',
    description: 'Hujjatlar uchun sumka',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '5 000',
    description: 'Qalamlar',
  },
  {
    imageUrl: '/images/product-1.png',
    price: '3 000',
    description: 'Stikerlar',
  }
]

function ProductsSection() {
  return (
    <Section>
      <div className='md:w-full md:flex md:justify-between md:items-center md:gap-10'>
        <h1 className='text-2xl'>Mahsulotlar<span className='text-primary'>?</span></h1>
        <p className='text-secondary'>Ana endi siz bizdagi mavjud barcha mahsulotlarni ko‘rib chiqishingiz mumkin bo‘ladi, faqat shoshilmang, batafsil ko‘rib chiqing.</p>
      </div>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mt-5'>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt="product-image" className='bg-[#F9F5F5] rounded-lg h-56 object-cover'/>
            <h1 className='text-xl font-medium'>{item.price} so'm</h1>
            <p className='text-xs text-secondary'>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ProductsSection;