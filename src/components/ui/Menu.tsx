export default function Menu() {
   return (
      <nav className='flex justify-end items-center gap-7 px-8 py-6'>
         <ul className='flex gap-7 text-white'>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <button className='bg-[var(--primary)] px-4 py-2'>
            Make a Reservation
         </button>
      </nav>
   )
}
