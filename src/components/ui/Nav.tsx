import Button from "./Button";

export default function Nav() {
   return (
      <header className='absolute w-full flex justify-between items-center px-12 pt-8 z-10'>
          <h1 className="text-3xl font-boska font-bold text-[var(--primary)] tracking-wide">PAMIRÒ</h1>

         <nav className='flex justify-end items-center gap-7'>
            <ul className='flex gap-7 text-[var(--primary)] *:cursor-pointer *:hover:text-[var(--primary-hover)]'>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#footer">Contact</a></li>
            </ul>
            <Button redirectTo='/reservation'>Make a Reservation</Button>
         </nav>
      </header>
   )
}
