"use client"
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from "next/navigation"
import Link from 'next/link'
import {CiMenuFries} from 'react-icons/ci'

const Links = [
  {
    name: 'home',
    path: '/ '
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact '
  },
]
const MobileNav = () => {
  const pathname =  usePathname();
  return <Sheet>
      <SheetTrigger flex justify-center items-center>
        <CiMenuFries className="text-[32px] text-royalpurple"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        {/* logo below*/}
        <div className="mt-30 mb-40 text-center text-2xl">
          <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Enonche<span className='text-royalpurple'>.</span>
          </h1>
          </Link>
        </div>
        {/* nav  */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index)=>{
            return (
              <Link 
              href={link.path} 
              key={index}
              className={`
                ${link.path === pathname && "text-electricpurple border-b-2 border-electricpurple"} text-xl capitalize hover:text-royalpurple transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
  </Sheet>

  
}

export default MobileNav