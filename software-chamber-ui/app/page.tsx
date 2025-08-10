import Banner from "@/components/hero/Banner";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import WhyChoose from "@/components/sections/WhyChoose";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-sans">
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[length:24px_24px]"></div>

      <Banner/>
      <ValueProposition />
      <Services />
      <Process />
      <WhyChoose />
   
    </main>
  );
}