import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michael Chen",
    role: "Privacy Advocate",
    avatar: "M",
    avatarColor: "from-blue-400 to-blue-600",
    rating: 5,
    content: "Finally found security apps that actually respect privacy. No ads, no data collection, just pure protection. The firewall feature is incredibly detailed."
  },
  {
    name: "Sarah Johnson",
    role: "Tech Professional",
    avatar: "S",
    avatarColor: "from-purple-400 to-purple-600",
    rating: 5,
    content: "Love how lightweight these apps are. My phone runs just as fast with all three installed. The anti-spy feature caught apps I didn't even know were tracking me!"
  },
  {
    name: "David Rodriguez",
    role: "IT Security Analyst",
    avatar: "D",
    avatarColor: "from-green-400 to-green-600",
    rating: 5,
    content: "Been using these apps for 6 months. Zero false positives, caught several actual threats. The customer support is phenomenal - they actually understand security."
  }
];

const stats = [
  { value: "4.8/5", label: "Average Rating" },
  { value: "50K+", label: "Reviews" },
  { value: "5M+", label: "Downloads" },
  { value: "99.9%", label: "Detection Rate" }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join millions of satisfied users who trust MadMax Technologies to protect their digital privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{review.content}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
