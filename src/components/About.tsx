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
      <section className='h-screen grid grid-cols-3 gap-4 px-12 py-14'>
         <h2 className='font-gambarino text-5xl'>Passion for Quality, Love for Meat</h2>

         <section className='col-span-2 content-end ml-30'>
            <p className='text-[17px] mb-12'>
               At Deliyumety, we believe that great meals start with the finest ingredients. That&apos;s why we source only the best
               cuts from trusted suppliers. Our chefs are experts in crafting mouthwatering dishes that celebrate the art of
               cooking meat. Whether you crave a tender steak or a hearty BBQ, we ensure every bite is a feast for your senses.
            </p>
            <section className='grid grid-cols-2 justify-between gap-8 [&>div>h3]:font-gambarino [&>div>h3]:text-3xl [&>div>p]:text-[17px]'>
               {features.map((feature, index) => (
                  <div key={index} className='w-fit'>
                     <h3>{feature.title}</h3>
                     <div className='relative w-90 h-90 my-2'>
                        <Image
                           src={feature.image}
                           alt={feature.alt}
                           fill
                           objectFit='cover'
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
