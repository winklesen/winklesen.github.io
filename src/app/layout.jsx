"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import { noto_sans, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html
      lang="en"
      className={`${noto_sans.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      <head />
      <body>
        <Navbar />
        <Contact />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
