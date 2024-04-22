import Footer from "@/components/footer/Footer";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div>
      <main
        id="hero-section"
        className="h-dvh flex flex-row items-center justify-center relative"
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
     
    </div>
  );
}
