import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AiFeatures } from "@/components/AiFeatures";
import { SocialCloset } from "@/components/SocialCloset";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AiFeatures />
      {/* <SocialCloset /> */}
      <Footer />
    </div>
  );
};

export default Index;