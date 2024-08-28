"use client";
import HomePage from "./_pages/Home";
import About from "./_pages/About";
import Product from "./_pages/Product";
import Footer from "./_pages/Footer";
import Header from "./_componets/Header";





export default function Home() {
  return (
    <>   
     <>
      <Header/>
      <HomePage/>
      <div className="p-5">
        <Product/>
        <About/>
        <Footer/>
      </div>
      </>
    </>
  );
}
