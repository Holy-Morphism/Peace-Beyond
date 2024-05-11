import Authlayout from "./(auth)/layout";
import Header from "./(auth)/page";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
export default function Home() {
  return (
    <div>
      <Authlayout>
        <Header />
      </Authlayout>
      <Gallery/>
    </div>

  );
}
