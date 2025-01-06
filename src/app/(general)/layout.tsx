import AppFooter from "@/widgets/app/footer";
import AppNavBar from "@/widgets/app/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full">
      <AppNavBar />
      {children}
      <AppFooter />
    </section>
  );
}
