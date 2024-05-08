import NavBar from "@/components/navbar/NavBar";
import { Toaster } from "@/components/ui/toaster";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-dvh flex flex-col">
      <NavBar />
      <div className="h-dvh flex flex-col items-center justify-center">
        {children}
      </div>
      <Toaster />
    </section>
  );
};

export default Authlayout;
