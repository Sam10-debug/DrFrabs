"use client";
import AppFooter from "@/widgets/app/footer";
import AppNavBar from "@/widgets/app/navbar";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <section className="w-full">
      <AppNavBar />
      {children}
      {!["/download", "/waitlist"].includes(pathname) ? <AppFooter /> : null}
    </section>
  );
}
