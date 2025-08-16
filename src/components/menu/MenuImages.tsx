import { MenuImagesProps } from "../../lib/types"
import Image from "next/image"
import { Eye } from "lucide-react"

export default function MenuImages({ image, menuData }: MenuImagesProps) {
   const { active, index } = image;

   return (
      <div className="relative h-152 overflow-hidden">
         {active ? (
            <>
               <div className="absolute top-4 left-4 z-10 bg-[var(--primary-hover)] text-[var(--secondary)] px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                  <Eye size={16} />
                  <span>{menuData[index].name}</span>
               </div>
               
               <div style={{ top: index * -100 + "%" }} className="absolute w-full h-full transition-[top-cubic-bezier(0.76,0,024,1)] duration-500">
                  {menuData.map((item, index) => (
                     <div key={index} className="relative h-full">
                        <Image
                           src={item.src}
                           alt="dish image"
                           fill
                           objectFit="cover"
                        />
                     </div>
                  ))}
               </div>
            </>
         ) : (
            <div className="flex items-center justify-center h-full bg-primary/50 text-secondary">
               <div className="text-center">
                  <Eye size={26} className="mx-auto mb-1 opacity-60" />
                  <p className="text-xl font-boska font-medium">Discover our dishes</p>
                  <p className="text-sm opacity-80">Hover to preview images</p>
               </div>
            </div>
         )}
      </div>
   )
}
