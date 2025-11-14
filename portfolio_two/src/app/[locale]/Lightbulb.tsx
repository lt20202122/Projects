import Image from "next/image"

export default function Lightbulb() {
  return (
<div className='relative w-full h-full'>
          <Image
          src="/Lightbulb.png"
          alt="Stocks going up"
          fill
          className='object-contain rotate-355'
          />
        </div>
  )
}
