import { Toaster } from "@/components/ui/toaster";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-dvh flex items-center justify-center">
      <div>{children}</div>
      <Toaster />
    </section>
  );
};

export default Authlayout;
