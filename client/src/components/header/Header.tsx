import NavBar from "../navbar/NavBar";
import Title from "@/components/Title";

const Header = () => {
  return (
    <header className="h-dvh">
      <NavBar />
      <main
        id="hero-section"
        className="h-full w-full flex flex-row items-center justify-center relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="/videos/bg-video.mp4"
        />
        <Title className="text-white text-9xl fade-in-5 z-10 relative" />
      </main>
    </header>
  );
};

export default Header;
