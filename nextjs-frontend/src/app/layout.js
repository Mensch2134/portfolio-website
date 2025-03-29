import { Geist, Geist_Mono, Inconsolata, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SanityLive } from "@/sanity/live";

const inconsolata = Inconsolata({ 
  subsets: ["latin"], 
});

const roboto = Roboto({ 
  subsets: ["latin"], 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inconsolata.className}
      >
        <Navbar />
        <div className="max-w-5xl mx-auto px-4">
          {children}
        </div>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
