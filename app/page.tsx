import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Frentes from "@/components/Frentes";
import Origem from "@/components/Origem";
import { Contato, Footer } from "@/components/Contato";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Frentes />
      <Origem />
      <Contato />
      <Footer />
    </main>
  );
}
