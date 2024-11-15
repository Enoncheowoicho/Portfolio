import Photo from '@/components/Photo'
import Socials from '@/components/Socials'
import { Button } from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'
const Home = () => {
  return <section className='h-full'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* text div below */}
        <div className='text-center xl:text-left'>
          <span className='text-xl '>Software Developer</span>
          <h1 className='h1 mb-6'>
            Hello I,m <br/> <span className='text-electricpurple'> Owoicho Enonche</span>
          </h1>
          <p className='max-w-[500px] mb-9 text-white/65'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dignissimos ad id illo sunt totam sequi at consequuntur aspernatur ipsum, natus pariatur qui vero provident molestias! Odit culpa sequi cumque.
          </p>
          {/* button and social media links below */}
          <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Button 
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            >
              <span>Download Resume </span>
              <FiDownload className='text-xl'/>
            </Button>
            <div className="mb-8 xl:mb-0 ">
             <Socials containerStyles="flex gap-3" 
             iconStyles="w-9 h-9 border border-electricpurple rounded-full flex justify-center  items-center text-electricpurple text-base hover:bg-electricpurple hover:text-primary hover:transistion-all duration-500 "/>
            </div>
          </div>
        </div>
        {/* image div down here  */}
        <div>
          <Photo/>
        </div>
      </div>
    </div>
  </section>

}

export default Home

