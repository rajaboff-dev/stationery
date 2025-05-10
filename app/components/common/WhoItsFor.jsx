import React from 'react';
import Section from "@/app/components/utils/Section";

const cards = [
  {
    imgUrl: '/images/whoitsfor-card-1.png',
    label: 'Mijoz / Biznesmen',
    description: 'Tadbirkorlar bizni tez-tez yo‘qlab turishadi'
  },
  {
    imgUrl: '/images/whoitsfor-card-1.png',
    label: 'Mijoz / Maktab o\'quvchilari',
    description: 'Maktab o‘quvchilari bizning doimiy mijozlarimizdandir'
  },
  {
    imgUrl: '/images/whoitsfor-card-1.png',
    label: 'Mijoz / Har qanday hodimlar',
    description: 'Hodimlar  ishga doir narsalarni bizda topishadi'
  },
  {
    imgUrl: '/images/whoitsfor-card-1.png',
    label: 'Mijoz / Va boshqalar',
    description: 'Boshqa kishilar ham bazida narsa olib turishadi'
  },
]

function WhoItsFor() {
  return (
    <Section className='py-10'>
      <h1 className='text-2xl'>Biz kimga kerakmiz<span className='text-primary'>?</span></h1>
      <div className='mt-5 flex overflow-auto gap-5 xl:items-center xl:justify-between'>
        {cards.map((card, i) => (
            <div
              key={i}
              className="w-[320px] h-96 bg-cover bg-no-repeat bg-center flex-shrink-0 flex flex-col items-start justify-end p-3 text-white rounded-lg"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.15) 15%, rgba(0,0,0,1) 100%), url(${card.imgUrl})`,
              }}
            >
              <p className='font-light'>{card.label}</p>
              <h1 className="text-xl font-medium">{card.description}</h1>
            </div>
        ))}
      </div>
    </Section>
  );
}

export default WhoItsFor;