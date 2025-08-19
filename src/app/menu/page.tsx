'use client'
import Link from 'next/link';
import { useState, useRef } from 'react';
import { menuData } from '@/data/menuData';
import { MoveLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import MenuImages from '@/components/menu/MenuImages';

export default function Menu() {
   const categories = ["Starter", "Mains", "Sides", "Desserts", "Beverages"];
   const [activeTab, setActiveTab] = useState<typeof categories[number]>(categories[0]);
   const [image, setImage] = useState({ active: false, index: 0 })
   const scrollRef = useRef<HTMLUListElement>(null);

   const filteredItems = menuData.filter(item => item.category === activeTab);

   const scrollLeft = () => {
      if (scrollRef.current) {
         scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
   };

   const scrollRight = () => {
      if (scrollRef.current) {
         scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
   };

   return (
      <main className='bg-[var(--secondary)] text-[var(--primary)] sm:h-screen px-6 sm:px-18 pt-12 pb-28'>
         <Link href="/" className="flex mb-6">
            <MoveLeft size={32} />
         </Link>
         <header className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 justify-between sm:items-center">
            <h1 className="font-gambarino text-5xl">A Menu for Meat Lovers</h1>
            <div className="flex flex-col sm:items-end">
               <ul ref={scrollRef} className="flex items-center py-4 gap-4 sm:gap-10 h-full overflow-x-auto scrollbar-hide">
                  {categories.map((category, index) => (
                     <li key={index} className="flex-shrink-0">
                        <a onClick={() => setActiveTab(category)} className={`px-4 py-2 cursor-pointer whitespace-nowrap ${activeTab === category ? 'bg-[var(--primary)] text-[var(--secondary)]' : ''}`}>
                           {category}
                        </a>
                     </li>
                  ))}
               </ul>
               <div className="flex gap-2 mt-2 self-end sm:hidden">
                  <button onClick={scrollLeft} className="p-2 bg-[var(--primary)] text-[var(--secondary)] hover:bg-opacity-80 rounded">
                     <ChevronLeft size={20} />
                  </button>
                  <button onClick={scrollRight} className="p-2 bg-[var(--primary)] text-[var(--secondary)] hover:bg-opacity-80 rounded">
                     <ChevronRight size={20} />
                  </button>
               </div>
            </div>
         </header>
         <section className="grid sm:grid-cols-2 gap-4 bg-[var(--primary)] text-[var(--secondary)] mt-20 p-4">
            <section className="h-152 flex flex-col border-2 border-[var(--secondary)] gap-4 p-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[var(--primary)] [&::-webkit-scrollbar-thumb]:bg-[var(--secondary)]">
               {filteredItems.map((item, index) => (
                  <div
                     key={index}
                     onMouseEnter={() => setImage({ active: true, index })}
                     onMouseLeave={() => setImage({ active: false, index })}
                     className="flex justify-between items-top gap-4 px-4 py-2 hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
                  >
                     <div className='sm:h-[91px] flex flex-col justify-center'>
                        <span className='font-gambarino text-xl sm:text-2xl'>{item.name}</span>
                        <p className='text-sm sm:text-[17px] mt-1 sm:mt-2'>{item.description}</p>
                     </div>
                     <span className='font-gambarino text-lg sm:text-2xl'>{item.price}</span>
                  </div>
               ))}
            </section>
            <section className='hidden sm:block'>
               <MenuImages image={image} menuData={filteredItems} />
            </section>
         </section>
      </main>
   )
}
