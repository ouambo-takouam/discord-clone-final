import NavigationSidebar from "@components/navigation/navigation-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-full md:flex flex-col w-[72px] fixed z-30 inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="h-full md:pl-[72px]">{children}</main>
    </div>
  );
}
