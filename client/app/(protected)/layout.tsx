import Header from "@/components/header";
import HeaderProvider from "@/components/providers/headerProvider";
import DashboardSidebar from "@/components/sidebar/dashboardSidebar";
import ToolbarWrapper from "@/components/toolbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="rounded-md flex flex-col md:flex-row w-full h-screen">
      <DashboardSidebar />
      <HeaderProvider>
        <section className="flex flex-col flex-1">
          <Header />
          <div className="border-l size-full flex flex-col">
            <ToolbarWrapper />
            <div className="p-6 flex-1 flex flex-col overflow-hidden gap-2.5">
              {children}
              <ReactQueryDevtools />
            </div>
          </div>
        </section>
      </HeaderProvider>
    </main>
  );
}
