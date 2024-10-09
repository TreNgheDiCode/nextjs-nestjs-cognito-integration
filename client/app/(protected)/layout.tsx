import Header from "@/components/header";
import HeaderProvider from "@/components/providers/headerProvider";
import ToolbarProvider from "@/components/providers/toolbarProvider";
import DashboardSidebar from "@/components/sidebar/dashboardSidebar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="rounded-md flex flex-col md:flex-row w-screen h-screen  overflow-hidden">
      <DashboardSidebar />
      <HeaderProvider>
        <section className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <ToolbarProvider>
            <div className="border-l size-full flex flex-col overflow-hidden">
              <div className="p-6 flex-1 flex flex-col overflow-hidden gap-2.5">
                {children}
                <ReactQueryDevtools />
              </div>
            </div>
          </ToolbarProvider>
        </section>
      </HeaderProvider>
    </main>
  );
}
