"use client"; 
import Navbar from "./components/Navbar" 
import Slide from "./components/Slide";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slide />
      <Galeria />
      <Footer />
    </>
  );
};
