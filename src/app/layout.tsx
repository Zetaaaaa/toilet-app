import type { Metadata } from "next";
// These styles apply to every route in the application
import './globals.css'
import Footer from '../app/components/Footer'

export const metadata: Metadata = {
  title: "Where's my toilet?",
  description: "Find toilet in cracow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
