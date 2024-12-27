import { Sparkles, Users, Recycle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Style Assistant",
    description: "Get personalized outfit recommendations based on your style, occasions, and existing wardrobe.",
  },
  {
    icon: Users,
    title: "Trusted Circles",
    description: "Share and discover fashion within your community of friends, colleagues, and style enthusiasts.",
  },
  {
    icon: Recycle,
    title: "Sustainable Fashion",
    description: "Reduce fashion waste by renting, selling, and buying pre-loved items from people you trust.",
  },
];

export const Features = () => {
  return (
    <div className="pb-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral mb-2">{feature.title}</h3>
              <p className="text-neutral-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};