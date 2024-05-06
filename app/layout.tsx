import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/modal";
import LoginModal from "./components/modals/loginModal";
import SignupModal from "./components/modals/signupModal";
import AddPropertyModal from "./components/modals/addPropertyModal";
import SearchModal from "./components/modals/searchModal";

const inter = localFont({
  src: [
    {
      path: '../public/Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "uzbnb Clone",
  description: "uzbnb clone with Nextjs, Tailwind and Django DRF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
      <div>Modal cont</div>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">
          {children}
        </div>

        <LoginModal />

        <SearchModal />

        <SignupModal />

        <AddPropertyModal />
        </body>
    </html>
  );
}
