import { animate, motion } from "framer-motion";

const stairAnimation={
    initial:{
        top:"0%",
    },
    animate:{
        top: "100%"
    },
    exit:{
        top:["100%", "0%"],
    },
};

// calculate the reverse index for stargeeed delay 
const reverseIndex = (index)=>{
    const totalSteps = 6; //num of damn steps shii
    return totalSteps - index - 1;
}
const Stairs = () => {
  return < >
  {/* 
  render 6 motion divs each a step of the damn stairs broo
  each div wil have the same animation defined by the stairsAnimation object 
  the delay for each div is calculated simountanouesly based on its revered index
  creating a stagrered effect with decreasing delay for each subsequent set thats how its done broski broski broski 
  
  */}
  {[...Array(6)].map((_, index)=>{
    return(
        <motion.div 
        key={index} 
        variants={stairAnimation} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{
            duration:0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative "
        />
    )
  })}

  </>
};

export default Stairs