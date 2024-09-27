import DashboardSidebar from "@/components/dashboard-sidebar";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="rounded-md flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <DashboardSidebar />
      <section className="flex flex-1 overflow-scroll">
        {/* Header */}
        <div className="p-2 md:p-10 rounded-tl-lg border border-neutral-200 size-full flex flex-col gap-2">
          {children}
        </div>
      </section>
    </main>
  );
}
