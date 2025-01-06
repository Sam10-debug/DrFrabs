import AppFooter from "@/widgets/app/footer";
import AppNavBar from "@/widgets/app/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full bg-white_f0">
      <AppNavBar />
      {children}
      <AppFooter bgColor="bg-grey_500" textColor="text-white" />
    </section>
  );
}
