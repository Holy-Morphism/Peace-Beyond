import Title from "@/components/Title";
import Gallery from "@/components/gallery/Gallery";
import React from "react";

const Header = () => {
  return (
    <>
    <main
      id="hero-section"
      className="h-full w-full flex flex-col items-center justify-center relative"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src="/videos/bg-video.mp4"
      />

      <Title className="text-white text-5xl fade-in-5 z-10 relative md:text-9xl" />
      <Gallery></Gallery>  
    </main>
    
    </>
  );
};

export default Header;
