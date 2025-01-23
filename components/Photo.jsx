"use client"

import {motion} from "framer-motion"
import Image from 'next/image'

const Photo = () => {
  return <div className="w-full h-full relative">
        <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1, 
                transition: {delay:2, duration: 0.4, ease: 
                    "easeIn" },
                }}
        >
            <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1, 
                transition: {delay:2.4, duration: 0.4, ease: 
                    "easeInOut" },
                }}
            className="w-[268px] h-[268px] xl:w-[428px] xl:h-[428px] mix-blend-lighten">
                <Image 
                src="/Assets/image2.PNG" 
                priority 
                quality={100} 
                fill 
                alt="image" 
                className="object-contain rounded-full shadow-2xl" 
                />
            </motion.div>
        </motion.div>
    </div>
}

export default Photo