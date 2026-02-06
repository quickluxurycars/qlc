'use client';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-4 pt-[102px]"> {/* pt-[102px] matches your Figma 'top' value */}
      
      {/* Container to constrain width and center align */}
      <div className="mx-auto max-w-[862px]">
        
        <Carousel 
          transition={{ duration: 2 }} 
          loop={true}
          autoplay={true}
          autoplayDelay={3000}
          className="rounded-xl overflow-hidden shadow-xl" 
          placeholder={undefined} 
          onResize={undefined} 
          onResizeCapture={undefined} 
          onPointerEnterCapture={undefined} 
          onPointerLeaveCapture={undefined}
        >
          <Image
            src="/images/cars/audi_a3/1.jpeg"
            alt="image 1"
            width={862}
            height={485}
            className="h-[300px] md:h-[485px] w-full object-cover"
          />
          <Image
            src="/images/cars/hummer/1.jpeg"
            alt="image 2"
            width={862}
            height={485}
            className="h-[300px] md:h-[485px] w-full object-cover"
          />
          <Image
            src="/images/cars/mercedes_c300/1.jpeg"
            alt="image 3"
            width={862}
            height={485}
            className="h-[300px] md:h-[485px] w-full object-cover"
          />
        </Carousel>
      </div>
      {/* Text Section Below Carousel */}
      <div className="mt-10 flex flex-col items-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 heading-gold">Drive the extraordinary.</h2>
        <p className="max-w-2xl text-base md:text-lg text-gray-700">
          Experience world-class luxury cars curated for those who demand more than just a ride. From iconic supercars to elegant sedans and powerful SUVs, we deliver unmatched comfort, style, and performance — every time you drive.
        </p>
        <Link href="/collection">
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
            Explore Our Collection
          </button>
        </Link>
      </div>
    </div>
  );
}