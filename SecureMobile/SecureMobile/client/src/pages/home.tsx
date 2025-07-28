import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AppsShowcase from "@/components/AppsShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import TrustBadges from "@/components/TrustBadges";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AppsShowcase />
      <FeaturesSection />
      <TrustBadges />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
