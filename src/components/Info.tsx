import Image from 'next/image'
import quality from '../../public/quality.webp'
import craftsmanship from '../../public/craftsmanship.webp'

export default function Info() {
   return (
      <section className='h-screen grid grid-cols-3 gap-4 px-12 py-14'>
         <span className='font-gambarino text-5xl'>
            Passion for Quality, Love for Meat
         </span>

         <section className='col-span-2 content-end ml-30'>
            <p className='text-[17px] mb-12'>
               At Deliyumety, we believe that great meals start with the finest ingredients. That's why we source only the best
               cuts from trusted suppliers. Our chefs are experts in crafting mouthwatering dishes that celebrate the art of
               cooking meat. Whether you crave a tender steak or a hearty BBQ, we ensure every bite is a feast for your senses.
            </p>
            <section className='grid grid-cols-2 [&_div_span]:font-gambarino [&_div_span]:text-3xl [&_div_div]:my-2 [&_div_p]:text-[17px] [&_div_p]:w-90'>
               <div>
                  <span>Premium Quality</span>
                  <div className='w-90 h-90 relative'>
                     <Image
                     src={quality}
                     alt='Our Quality'
                     fill
                     objectFit='cover'
                  />
                  </div>
                  <p>
                     We source only the finest, sustainably raised meats, ensuring every dish is fresh, tender, and full of flavor.
                  </p>
               </div>
               <div>
                  <span>Expert Craftsmanship</span>
                  <div className='w-90 h-90 relative'>
                     <Image
                     src={craftsmanship}
                     alt='Our Craftsmanship'
                     fill
                     objectFit='cover'
                  />
                  </div>
                  <p>
                     Our chefs bring years of skill and passion, each dish to perfection with techniques and modern flavors.
                  </p>
               </div>
            </section>
         </section>
      </section>
   )
}
