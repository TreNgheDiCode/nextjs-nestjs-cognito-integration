import DashboardSidebar from "@/components/sidebar/dashboardSidebar";
import Header from "@/components/header";
import HeaderProvider from "@/components/providers/headerProvider";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="rounded-md flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <DashboardSidebar />
      <HeaderProvider>
        <section className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <div className="border-l size-full flex flex-col overflow-scroll">
            {children}
          </div>
        </section>
      </HeaderProvider>
    </main>
  );
}
