import { Zap, EyeOff, Cloud, RotateCcw, Headphones, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized algorithms ensure minimal impact on device performance while maintaining maximum protection.",
    color: "bg-primary"
  },
  {
    icon: EyeOff,
    title: "Zero Data Collection",
    description: "We never collect, store, or share your personal data. Your privacy is our top priority.",
    color: "bg-green-500"
  },
  {
    icon: Cloud,
    title: "Offline Protection",
    description: "Core security features work without internet connection, ensuring protection even when offline.",
    color: "bg-purple-500"
  },
  {
    icon: RotateCcw,
    title: "Real-time Updates",
    description: "Automatic threat database updates keep you protected against the latest security threats.",
    color: "bg-red-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team available around the clock to help with any security concerns or questions.",
    color: "bg-blue-500"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by leading security organizations for excellence in mobile security and privacy protection.",
    color: "bg-indigo-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose MadMax Technologies?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for privacy-conscious users who demand the highest level 
            of protection without compromising performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
