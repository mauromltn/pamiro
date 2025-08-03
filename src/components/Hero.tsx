import Image from 'next/image';
import heroImage from '../../public/hero.webp';
import Button from './ui/Button';

export default function Hero() {
  return (
    <main className='relative h-screen'>
      <Image
        src={heroImage}
        placeholder='blur'
        alt="Restaurant interior"
        fill
        objectFit='cover'
      />

      <div className='absolute inset-0 bg-black/50' />

      <section className='absolute bottom-0 w-full  px-12 pb-20 flex justify-between items-end  text-[var(--primary)]'>

        <span className='w-160 text-6xl font-gambarino leading-snug'>Indulge in Premium Cuts & Authentic Flavors</span>

        <div className='w-1/4'>
          <p className='mb-6 text-[17px]'>From perfectly grilled steaks to slow-roasted meats, we serve you the finest selection of meat dishes prepared with passion.</p>
          <Button className='text-[var(--secondary)] text-[17px]'>View our Menu</Button>
        </div>
      </section>
    </main>
  )
}
