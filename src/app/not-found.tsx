import Link from 'next/link';

export default function NotFound() {
   return (
      <main className='min-h-screen bg-[var(--secondary)] text-[var(--primary)] flex flex-col items-center justify-center px-6 sm:px-12 py-14'>
         <div className='text-center max-w-2xl'>
            <h1 className='font-gambarino text-8xl sm:text-9xl lg:text-[12rem] mb-6 opacity-20'>
               404
            </h1>
            <h2 className='font-gambarino text-4xl sm:text-5xl lg:text-6xl mb-6'>
               Page Not Found
            </h2>
            <p className='text-[15px] sm:text-[17px] mb-8 opacity-80 leading-relaxed'>
               Oops! It seems like you've wandered off the menu. The page you're looking for doesn't exist or has been moved.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
               <Link href="/" className='px-6 py-3 bg-[var(--primary)] text-[var(--secondary)] hover:bg-[var(--primary-hover)] transition-all duration-200'>
                  <span>Back to Home</span>
               </Link>
               <Link href="/menu" className='px-6 py-3 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--secondary)] transition-all duration-200'>
                  <span>View Menu</span>
               </Link>
            </div>
         </div>
      </main>
   )
}