import { Award, Shield, Star, Lock } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Award,
    title: "AV-TEST",
    subtitle: "Certified",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "VB100",
    subtitle: "Award Winner",
    color: "text-primary"
  },
  {
    icon: Star,
    title: "Google Play",
    subtitle: "Editor's Choice",
    color: "text-yellow-500"
  },
  {
    icon: Lock,
    title: "ISO 27001",
    subtitle: "Compliant",
    color: "text-purple-500"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted & Certified</h2>
          <p className="text-xl text-muted-foreground">
            Independently verified and certified by leading security organizations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 border border-border rounded-lg hover:shadow-lg transition-all"
            >
              <badge.icon className={`h-12 w-12 ${badge.color} mx-auto mb-3`} />
              <div className="font-semibold text-foreground">{badge.title}</div>
              <div className="text-sm text-muted-foreground">{badge.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
