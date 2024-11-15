import type { Metadata } from "next";
import Header from "./_layout/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 gap-4 lg:gap-6">
        {children}
      </main>
    </div>
  );
}
