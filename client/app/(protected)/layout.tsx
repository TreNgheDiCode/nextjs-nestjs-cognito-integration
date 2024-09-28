import DashboardSidebar from "@/components/dashboard-sidebar";
import Header from "@/components/header";
import HeaderProvider from "@/components/providers/header-provider";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="rounded-md flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <DashboardSidebar />
      <HeaderProvider>
        <section className="flex flex-1 overflow-scroll">
          {/* Header */}
          <div className="p-2 md:px-10 md:pb-10 rounded-tl-lg border border-neutral-200 size-full flex flex-col gap-2">
            <Header />
            {children}
          </div>
        </section>
      </HeaderProvider>
    </main>
  );
}
