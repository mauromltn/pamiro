'use client'
import Link from 'next/link';
import { useState } from 'react';
import { menuData } from '@/data/menuData';
import { MoveLeft } from 'lucide-react';
import MenuImages from '@/components/menu/MenuImages';

export default function Menu() {
   const categories = ["Starter", "Mains", "Sides", "Desserts", "Beverages"];
   const [activeTab, setActiveTab] = useState<typeof categories[number]>(categories[0]);
   const [image, setImage] = useState({ active: false, index: 0 })

   const filteredItems = menuData.filter(item => item.category === activeTab);

   return (
      <main className='bg-[var(--secondary)] text-[var(--primary)] h-screen px-18 pt-12 pb-28'>
         <Link href="/" className="flex mb-6">
            <MoveLeft size={32} />
         </Link>
         <header className="flex justify-between items-center">
            <h1 className="font-gambarino text-5xl">A Menu for Meat Lovers</h1>
            <ul className="flex items-center gap-10">
               {categories.map((category, index) => (
                  <li key={index}>
                     <a
                        onClick={() => setActiveTab(category)}
                        className={`px-4 py-2 cursor-pointer ${activeTab === category ? 'bg-[var(--primary)] text-[var(--secondary)]' : ''}`}
                     >
                        {category}
                     </a>
                  </li>
               ))}
            </ul>
         </header>
         <section className="grid grid-cols-2 gap-4 bg-[var(--primary)] text-[var(--secondary)] mt-20 p-4">
            <section className="h-152 flex flex-col gap-2 border-2 border-[var(--secondary)] p-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[var(--primary)] [&::-webkit-scrollbar-thumb]:bg-[var(--secondary)]">
               {filteredItems.map((item, index) => (
                  <div
                     key={index}
                     onMouseEnter={() => setImage({ active: true, index })}
                     onMouseLeave={() => setImage({ active: false, index })}
                     className="flex justify-between items-top gap-4 px-4 py-2 hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
                  >
                     <div className='h-[91px] flex flex-col justify-center'>
                        <span className='font-gambarino text-2xl'>{item.name}</span>
                        <p className='text-[17px] mt-2'>{item.description}</p>
                     </div>
                     <span className='font-gambarino text-2xl'>{item.price}</span>
                  </div>
               ))}
            </section>
            <section>
               <MenuImages image={image} menuData={filteredItems} />
            </section>
         </section>
      </main>
   )
}
