import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import About from "./components/About";
import Transform from "./components/Transform";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section1></Section1>
      <About></About>
      <Transform></Transform>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
