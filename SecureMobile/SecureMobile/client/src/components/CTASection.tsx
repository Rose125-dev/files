import { Button } from "@/components/ui/button";
import { Download, Info, Shield, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const scrollToApps = () => {
    const element = document.getElementById("apps");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Android?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Download all three apps now and get comprehensive protection in minutes. 
            Join millions of users who trust MadMax Technologies with their digital security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={scrollToApps}
              className="bg-white text-primary hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Complete Suite
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Info className="mr-3 h-5 w-5" />
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-center text-blue-100 space-x-6">
            <div className="flex items-center">
              <Download className="mr-2 h-5 w-5" />
              <span>Free Download</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              <span>No Ads</span>
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              <span>Privacy First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
