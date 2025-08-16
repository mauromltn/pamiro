import { MenuImagesProps } from "../../lib/types"
import Image from "next/image"

export default function MenuImages({ image, menuData }: MenuImagesProps) {
   const { active, index } = image;

   if (active) return (
      <div className=" relative h-152 overflow-hidden">
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
      </div>
   )
}
