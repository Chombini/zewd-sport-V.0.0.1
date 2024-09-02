"use client";
import About from "./_pages/About";
import Product from "./_pages/Product";
import Footer from "./_pages/Footer";
import Header from "./_componets/Header";





export default function Home() {
  return (
    <>   
      <Header/>
      <Product/>
      <div className="px-3">
        <About/>
        <Footer/>
      </div>
    </>
  );
}
