import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/ninja.png'


export default function Navbar() {
  return (
     <nav className="bg-blue-300 text-black">
      <Image
      src = {Logo}
      alt= "ninja jonte helpdesk logo"
      width={70}
      height={70}
      quality={75}
      //blur effect before the image loads
      placeholder='blur'
      />
      <h2> <span className="font-bold text-3xl">NEXT LENS SERVICES</span></h2>
      <div className="font-bold flex justify-end ">
        <Link href="/">Dashboard</Link>
        <Link href="/services">Services</Link>
        <Link href="/About">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
