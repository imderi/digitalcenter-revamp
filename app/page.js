import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Processing from "@/components/Processing";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import ClientsGrid from "@/components/ClientsGrid";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Processing />
        <Expertise />
        <ClientsGrid />
      </main>
      <Footer />
    </>
  );
}
