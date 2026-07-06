// app/page.tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/* O flex-col é obrigatório para que as divs empilhem corretamente */}
      <main className="flex flex-col">
        <Hero />
        
        <div className="divisor-global" />
        
        <Servicos />
        
        <div className="divisor-global" />
        
        <Sobre />
        
        <div className="divisor-global" />
        
        <Contato />
      </main>
      <Footer />
    </>
  );
}