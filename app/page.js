import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
      </main>
      <Footer />
    </>
  );
}
