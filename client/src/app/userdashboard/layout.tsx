import SideBar from "@/components/userdashboard/SideBar";

export default function Layout({ children }: { children: React.ReactNode })  {
  return (
    <section className="flex flex-row h-full w-full">
      <SideBar />
    <div className="h-full w-full">
    {children}
    </div>
    </section>
  );
};

