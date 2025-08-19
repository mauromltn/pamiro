'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function NavMobile() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <button onClick={() => setIsOpen(true)} className='block sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#F8EDE0" fill="none">
               <path d="M4 8.5L20 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
               <path d="M4 15.5L20 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
         </button>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ 
                     y: 0,
                     transition: { duration: 0.2, ease: "backIn" }
                  }}
                  exit={{ 
                     y: "-100%",
                     transition: { duration: 0.2, ease: "backOut" }
                  }}
                  className='fixed inset-0 bg-[var(--secondary)] z-50'
               >
                  <button onClick={() => setIsOpen(false)} className='absolute top-5 right-5 z-20'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#F8EDE0" fill="none">
                        <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#F8EDE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
                  <nav className='font-gambarino text-4xl h-full flex justify-center items-center'>
                     <ul className='text-[var(--primary)] space-y-6'>
                        <li><a href="/menu" onClick={() => setIsOpen(false)}>Menu</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#footer" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li><a href="/reservation" onClick={() => setIsOpen(false)}>Reservation</a></li>
                     </ul>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   )
}
