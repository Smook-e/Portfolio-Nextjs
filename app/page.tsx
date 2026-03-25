import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-100 flex  items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/about" }, { name: "Contact", link: "/contact" }]} />
        <Hero />
        <Grid />
      </div>
    </main>      
  );
}
