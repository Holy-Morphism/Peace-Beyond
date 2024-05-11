import SideBar from "@/components/userdashboard/SideBar";

export default function Layout({ children }: { children: React.ReactNode })  {
  return (
    <section className="flex flex-row h-full w-full">
      <SideBar />
      {children}
    </section>
  );
};

