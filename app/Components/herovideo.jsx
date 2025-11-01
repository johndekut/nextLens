"use client";
import { useRef } from "react";

export default function Herovideo() {
  const bgVideo = useRef(null);

  const handleMouseEnter = () => {
    bgVideo.current.play();
  };

  const handleMouseLeave = () =>{
    bgVideo.current.pause();
  };
  return (
    <div
      onMouseEnter = {handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
      className= " relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      > 
      <video
      ref={bgVideo}
      src="/videos/background.mp4"
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex-col items-center justify-center text-center">
        <h2 className="text-yellow-300 text-4xl font-bold drop-shadow-md text-center"> Discover Local Services</h2>
        <h3 className="font-bold text-red-900 pt-5">All servces at the click of a button</h3>

      </div>
    </div>
  );
}
