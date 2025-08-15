import { MenuImagesProps } from "../../lib/types"
import Image from "next/image"

export default function MenuImages({ image, menuData }: MenuImagesProps) {
   const { active, index } = image;

   if (active) return (
      <div>
         <Image
            src={menuData[index].src}
            alt=""
            fill
            objectFit="cover"
         />
      </div>
   )
}
