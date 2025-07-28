import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Wifi, Shield, Eye } from "lucide-react";
import { motion } from "framer-motion";

const apps = [
  {
    name: "Firewall - DNS & Anti Spy",
    icon: Wifi,
    gradient: "from-red-400 to-red-600",
    rating: 4.9,
    description: "Advanced network protection and monitoring",
    features: [
      "Real-time network monitoring",
      "Block malicious connections",
      "App-specific rules",
      "Data usage tracking"
    ],
    downloads: "2M+",
    color: "text-red-500"
  },
  {
    name: "Antivirus - Virus Scanner",
    icon: Shield,
    gradient: "from-blue-400 to-blue-600",
    rating: 4.8,
    description: "AI-powered malware detection and removal",
    features: [
      "Real-time scanning",
      "Malware removal",
      "Safe browsing protection",
      "Scheduled scans"
    ],
    downloads: "1.8M+",
    color: "text-blue-500"
  },
  {
    name: "Anti Spy App",
    icon: Eye,
    gradient: "from-purple-400 to-purple-600",
    rating: 4.7,
    description: "Detect and block spyware and tracking",
    features: [
      "Spyware detection",
      "Privacy monitoring",
      "Permission auditing",
      "Data leak prevention"
    ],
    downloads: "1.2M+",
    color: "text-purple-500"
  }
];

export default function AppsShowcase() {
  return (
    <section id="apps" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Security Apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful apps working together to provide comprehensive protection 
            for your Android device and personal data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all border border-border">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${app.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{app.name}</h3>
                    <div className="flex items-center justify-center text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      <span className="text-muted-foreground ml-2">({app.rating}/5)</span>
                    </div>
                    <p className="text-muted-foreground">{app.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="text-2xl font-bold text-foreground">FREE</div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Download Now
                    </Button>
                    <div className="text-sm text-muted-foreground">{app.downloads} downloads</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
