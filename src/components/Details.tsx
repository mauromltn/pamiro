import Image from 'next/image'
import background from '../../public/background.webp'
import ambiance from '../../public/ambiance.webp'
import cuts from '../../public/cuts.webp'
import variety from '../../public/variety.webp'


const cardDetails = [
   {
      title: 'Variety of Meat Specialties',
      description: 'From smoky BBQ to tender steaks, our diverse menu offers something for every meat lover.',
      image: variety,
   },
   {
      title: 'Cozy and Elegant Ambiance',
      description: 'Our restaurant combines warmth and sophistication, creating the perfect dinner.',
      image: ambiance,
   },
   {
      title: 'Premium, Hand-Selected Cuts',
      description: 'We serve only the finest cuts of meat, carefully chosen for exceptional taste and quality.',
      image: cuts,
   },
];

export default function Details() {
   return (
      <section className='relative h-screen px-12 py-14'>
         <Image src={background} alt="background image of restaurant" fill className='-z-10 object-cover' />
         <div className='absolute inset-0 bg-black/50 -z-10' />

         <h2 className='w-100 font-gambarino text-5xl text-[var(--primary)] mb-20'>Unmatched Quality and Experience</h2>
         <section className='grid grid-cols-3 justify-items-center [&>:nth-child(2)]:mt-12 [&>:nth-child(3)]:mt-24'>
            {cardDetails.map((card, index) => (
               <div key={index} className='w-fit h-fit p-3 flex flex-col bg-[var(--primary)]'>
                  <h3 className='text-2xl my-2'>{card.title}</h3>
                  <p className='w-90 my-3 '>{card.description}</p>
                  <div className='w-90 h-90 relative'>
                     <Image src={card.image} alt={card.title} fill className='object-cover' />
                  </div>
               </div>
            ))}
         </section>
      </section>
   )
}
