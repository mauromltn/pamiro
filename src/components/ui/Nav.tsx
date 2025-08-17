import NavMobile from "../mobile/NavMobile";
import Button from "./Button";

export default function Nav() {
   return (
      <header className='absolute w-full h-full px-5 sm:px-12 pt-5 sm:pt-8 z-10'>
         <div className='flex justify-between items-center'>
            <span className="text-3xl font-boska font-bold text-[var(--primary)] tracking-wide">PAMIRÒ</span>
            <nav className='hidden sm:flex justify-end items-center gap-7'>
               <ul className='flex gap-7 text-[var(--primary)] *:hover:text-[var(--primary-hover)]'>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#footer">Contact</a></li>
               </ul>
               <Button redirectTo='/reservation'>Make a Reservation</Button>
            </nav>

            <NavMobile />
         </div>
      </header>
   )
}
