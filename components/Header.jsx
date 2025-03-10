import Link from "next/link"
import { Button } from "./ui/button"
// component importation
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
return (
    <header className="py-8 xl:py-12 text-white" >
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Owoicho <span className="text-electricpurple">Enonche</span>
            </h1>
            </Link>
            

            {/* desktop nav */}
            <div className="hidden xl:flex  items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button> Hire now</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div> 

    </header>
)
}

export default Header