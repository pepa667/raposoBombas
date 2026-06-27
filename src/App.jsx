import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Billboard } from "./components/Billboard";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Billboard />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
