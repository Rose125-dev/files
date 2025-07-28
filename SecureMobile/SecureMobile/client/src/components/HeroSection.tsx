import { Button } from "@/components/ui/button";
import { Star, Download, Shield } from "lucide-react";
import { motion } from "framer-motion";
import MobileFrame from "./MobileFrame";

export default function HeroSection() {
  const scrollToApps = () => {
    const element = document.getElementById("apps");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete Android Security{" "}
              <span className="text-gradient">Suite</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your privacy with our comprehensive security apps. Firewall protection, 
              advanced antivirus, and anti-spy detection - all designed for privacy-focused users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={scrollToApps}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Download className="mr-3 h-5 w-5" />
                Download All Apps
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center text-muted-foreground">
                <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
                <span className="font-semibold">4.8/5</span>
                <span className="ml-1">Rating</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Download className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-semibold">5M+</span>
                <span className="ml-1">Downloads</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-semibold">Zero</span>
                <span className="ml-1">Malware</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <MobileFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
