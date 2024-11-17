import {Inter} from "next/font/google"
import Link from "next/link"

// For Google fonts
const inter = Inter({ subsets: [ 'latin' ] })


const Navbar = () => {
  //Navbar items here
  const navItems = [
    {
      name: "World",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    }
  ]

  return (
      <ul className={` ${inter.className} m-[66px] flex items-end justify-end h-[24px] font-medium text-[20px] space-x-6` }>
       {
        navItems.map((items, i)=>(
           
          <li key={i}>
            <Link href={items.link}>
            {items.name}
            </Link>
            </li>
           
        ))
       }
       
      </ul>
   
  )
}

export default Navbar
