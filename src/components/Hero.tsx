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
        className='select-none object-cover'
      />
      <div className='absolute inset-0 bg-black/50' />

      <section className='absolute bottom-0 px-5 sm:px-12 pb-35 sm:pb-20 flex flex-col sm:flex-row justify-between sm:items-end text-[var(--primary)] z-10'>
        <h1 className='sm:w-160 text-4xl mb-10 sm:mb-0 sm:text-6xl font-gambarino leading-snug'>Indulge in Premium Cuts & Authentic Flavors</h1>
        <div className='sm:w-1/4'>
          <p className='mb-4 sm:mb-6 text-[15px] sm:text-[17px]'>From perfectly grilled steaks to slow-roasted meats, we serve you the finest selection of meat dishes prepared with passion.</p>
          <Button redirectTo='/menu' className='text-[var(--secondary)] text-[15px] sm:text-[17px]'>View our Menu</Button>
        </div>
      </section>
    </main>
  )
}
