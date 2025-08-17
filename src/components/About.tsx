import Image from 'next/image'
import quality from '../../public/quality.webp'
import craftsmanship from '../../public/craftsmanship.webp'

const features = [
   {
      title: "Premium Quality",
      image: quality,
      alt: "Our Quality",
      description: "We source only the finest, sustainably raised meats, ensuring every dish is fresh, tender, and full of flavor."
   },
   {
      title: "Expert Craftsmanship",
      image: craftsmanship,
      alt: "Our Craftsmanship",
      description: "Our chefs bring years of skill and passion, each dish to perfection with techniques and modern flavors."
   }
]

export default function About() {
   return (
      <section id='about' className='min-h-screen grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 sm:px-12 py-14'>
         <h2 className='font-gambarino text-4xl sm:text-5xl mb-4 sm:mb-0'>Passion for Quality, Love for Meat</h2>

         <section className='sm:col-span-2 sm:content-end sm:ml-30'>
            <p className='text-[15px] sm:text-[17px] mb-8 sm:mb-12'>
               At Deliyumety, we believe that great meals start with the finest ingredients. That&apos;s why we source only the best
               cuts from trusted suppliers. Our chefs are experts in crafting mouthwatering dishes that celebrate the art of
               cooking meat. Whether you crave a tender steak or a hearty BBQ, we ensure every bite is a feast for your senses.
            </p>
            <section className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 [&>div>h3]:font-gambarino [&>div>h3]:text-2xl sm:[&>div>h3]:text-3xl [&>div>p]:text-[15px] sm:[&>div>p]:text-[17px]'>
               {features.map((feature, index) => (
                  <div key={index} className='w-full sm:w-fit'>
                     <h3>{feature.title}</h3>
                     <div className='relative w-full h-60 sm:w-90 sm:h-90 my-2'>
                        <Image
                           src={feature.image}
                           alt={feature.alt}
                           fill
                           className='object-cover'
                        />
                     </div>
                     <p>{feature.description}</p>
                  </div>
               ))}
            </section>
         </section>
      </section>
   )
}
