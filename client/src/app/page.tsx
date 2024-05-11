import Footer from "@/components/footer/Footer";
import Authlayout from "./(auth)/layout";
import Header from "./(auth)/page";

export default function Home() {
  return (
    <div>
      <Authlayout>
        <Header />
      </Authlayout>
      <Footer />
    </div>
  );
}
