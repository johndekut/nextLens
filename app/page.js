import * as React from 'react';
import Link from "next/link";
import Herovideo from "./Components/herovideo";
import { ModeToggle } from "./Components/theme-control";
import Navbar from './Components/navbar';
export default function Home() {
  return (
    <>
    <ModeToggle />
    <Navbar />
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
