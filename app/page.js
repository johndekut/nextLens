import Image from "next/image";
import Link from "next/link";
import Herovideo from "./Components/herovideo";
export default function Home() {
  return (
    <>
    <nav className="bg-blue-500 p-4 font-bold ">
      <ul className="flex m-4 flex-end ">
        <li className="pr-4"> <Link href="/">Home</Link></li>
        <li className=" pr-4"><Link href="/contact">Contact</Link></li>
        <li className="pr-4"> <Link href="/businesses">Businesses</Link> </li>
        <li> <Link href="/offers">offers</Link></li>

      </ul>
    </nav>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 pb--4" > Discover local services Near You</h1>

    <Herovideo />

    <footer className="bg-blue-600 font-light rounded-xl">
      <div className="text-white pl-5">
      <p className="text-white">Nextlens is a service that helps you discover all services you need near you at the click of a button. created and managed by Jonte</p>

      <p className="pt-3 text-white-500">2025 . All rights reserved. Crafted by <Link href="/github account">jonte</Link></p>
     </div>

    </footer>

    </div>
    </>
  );
}
