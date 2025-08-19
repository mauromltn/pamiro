import Image from 'next/image'
import avatar1 from '../../public/avatar1.webp'
import avatar2 from '../../public/avatar2.webp'
import avatar3 from '../../public/avatar3.webp'
import avatar4 from '../../public/avatar4.webp'

const Guests = [
   {
      name: 'Samantha Wilson',
      image: avatar1,
      review: '"The Best Steak I\'ve Ever Had! Cooked To Perfection, And The Atmosphere Was So Cozy."',
   },
   {
      name: 'Catherine Adore',
      image: avatar2,
      review: '"Delicious Food, With An Elegant Yet Relaxed Atmosphere. Perfect For Any Occasion"',
   },
   {
      name: 'Jane Doe',
      image: avatar3,
      review: '"The Perfect Spot For A Special Occasion. The Food And Service Were Outstanding."',
   },
   {
      name: 'Alice Johnson',
      image: avatar4,
      review: '"A Meat Lover\'s Paradise! Every Dish Was Packed With Flavor And So Well-Presented."',
   }
]

export default function Review() {
   return (
      <section className='h-screen px-6 sm:px-12 py-14'>
         <h2 className='font-gambarino text-4xl sm:text-5xl mb-16 sm:mb-20'>What Our Guests Are Saying</h2>
         <section className='grid sm:grid-cols-2 space-y-8 sm:space-y-20 sm:[&>:nth-child(3)]:justify-self-end sm:[&>:nth-child(4)]:justify-self-end'>
            {Guests.map((guest, index) => (
               <div key={index} className='flex gap-4 items-start sm:block sm:w-90'>
                  <div className='w-15 sm:w-40 h-15 sm:h-40 relative shrink-0'>
                     <Image src={guest.image} alt={guest.name} fill className='object-cover' />
                  </div>
                  <div className='shrink'>
                     <h3 className='font-gambarino text-lg sm:text-2xl sm:mt-4 mb-2'>{guest.review}</h3>
                     <p className='text-xs sm:text-sm italic'>{guest.name}</p>
                  </div>
               </div>
            ))}
         </section>
      </section>
   )
}
