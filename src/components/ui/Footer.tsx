import Image from 'next/image'
import footer from '../../../public/footer.webp'

export default function Footer() {
   return (
      <footer id='footer' className='h-screen relative px-12 py-14 text-[var(--primary)]'>
         <Image
            src={footer}
            alt="Footer Background"
            fill
            objectFit="cover"
            className='-z-10'
         />
         <div className='absolute inset-0 bg-black/50 -z-10' />

         <h2 className='font-gambarino text-5xl'>Get in Touch with Us</h2>
         <section className='h-full w-full flex flex-col justify-end pb-7'>
            <div className='grid grid-cols-3 justify-items-center [&_h3]:font-gambarino [&_h3]:text-3xl [&_h3]:mb-4 [&_p]:text-[17px]'>
               <div className='w-82'>
                  <h3>Address</h3>
                  <address>
                     <p className='mb-6'>Viale delle Magnolie, 7 &ndash; Collina Belvedere, 00199 Roma, Italia</p>
                     <a className='underline' href="https://www.google.com/maps?q=Viale+delle+Magnolie,+7+–+Collina+Belvedere,+00199+Roma,+Italia" target="_blank" rel="noopener noreferrer">View on Map</a>
                  </address>
               </div>
               <div>
                  <h3>Inquiries</h3>
                  <p className='mb-2'>For any inquiries, please contact:</p>
                  <address>
                     <p>Email: <a className='underline' href="mailto:restaurant@pamiro.com">restaurant@pamiro.com</a></p>
                     <p>Phone: <a className='underline' href="tel:+390612345678">+39 06 12345678</a></p>
                  </address>
               </div>
               <div>
                  <h3>Opening Times</h3>
                  <p className='mb-2'>Monday - Friday: <time dateTime="11:00">11:00</time> - <time dateTime="22:00">22:00</time></p>
                  <p>Saturday - Sunday: <time dateTime="12:00">12:00</time> - <time dateTime="23:00">23:00</time></p>
               </div>
            </div>

            <div className='flex justify-between items-center mt-12 border-b border-[var(--primary)] pb-6'>
               <h1 className="text-3xl font-boska font-bold text-[var(--primary)] tracking-wide">PAMIRÒ</h1>
               <ul className='flex gap-7'>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#footer">Contact</a></li>
               </ul>
            </div>
            <div className='flex justify-between mt-6'>
               <ul className='flex gap-4 *:underline'>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-of-service">Terms of Service</a></li>
               </ul>
               <p>&copy; 2025 Pamirò Restaurant. All rights reserved.</p>
            </div>
         </section>
         
      </footer>
   )
}
