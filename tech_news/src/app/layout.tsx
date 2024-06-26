"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Tech News Hub</title>
      </head>
      <body className={`${inter.className} ${isDarkMode ? "bg-gray-900" : "bg-white"} flex flex-col min-h-full`}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          {children}
        </main>
        <footer className='bg-gray-800 text-white py-4 mt-10 my-auto position:fixed'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
