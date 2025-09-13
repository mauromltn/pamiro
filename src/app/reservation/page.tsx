'use client'
import Link from "next/link"
import { MoveLeft } from "lucide-react"
import { useState } from "react"

export default function Reservation() {
   const [showLabelDate, setShowLabelDate] = useState(true);
   const [showLabelTime, setShowLabelTime] = useState(true);

   return (
      <main className='bg-[var(--secondary)] text-[var(--primary)] h-screen px-6 sm:px-18 pt-12 pb-28'>
         <Link href="/" className="flex mb-6">
            <MoveLeft size={32} />
         </Link>
         <h1 className='font-gambarino text-5xl mb-6'>Reservation</h1>
         <p className='mb-4'>Please fill out the form below to make a reservation.</p>

         <form action="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <input type="text" placeholder="Name" className="p-2 border border-[var(--primary)]" />
               <input type="email" placeholder="Email" className="p-2 border border-[var(--primary)]" />
               <input type="tel" placeholder="Phone" className="p-2 border border-[var(--primary)]" />
               <div className="relative">
                  <input
                     type="date"
                     className="p-2 border border-[var(--primary)] w-full bg-transparent relative z-10"
                     onChange={() => setShowLabelDate(false)}
                  />
                  <label className={`absolute sm:hidden left-2 top-2 text-[var(--primary)]/50 pointer-events-none ${showLabelDate ? '' : 'opacity-0 invisible'}`}>Date</label>
               </div>
               <div className="relative">
                  <input
                     type="time"
                     className="p-2 border border-[var(--primary)] w-full  bg-transparent relative z-10"
                     onChange={() => setShowLabelTime(false)}
                  />
                  <label className={`absolute sm:hidden left-2 top-2 text-[var(--primary)]/50 pointer-events-none ${showLabelTime ? '' : 'opacity-0 invisible'}`}>Time</label>
               </div>
               <input type="number" placeholder="Number of Guests" className="p-2 border border-[var(--primary)]" />
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-[var(--primary)] text-[var(--secondary)]">Submit</button>
         </form>
      </main>
   )
}
