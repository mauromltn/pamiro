import Hero from "@/components/Hero";
import Nav from "@/components/ui/Nav";
import About from "@/components/About";
import Details from "@/components/Details";
import Review from "@/components/Review";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Details />
      <Review />
      <Footer />
    </>
  )
}
