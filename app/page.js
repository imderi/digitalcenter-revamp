import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Processing from "@/components/Processing";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import ClientsGrid from "@/components/ClientsGrid";
import Features from "@/components/Features";
import OurServices from "@/components/OurServices";
import Quotes from "../components/Quotes";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Processing />
        <Features />
        <Expertise />
        <ClientsGrid />
        <OurServices />
        <Quotes />
      </main>
      <Footer />
    </>
  );
}
