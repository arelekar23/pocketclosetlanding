import { Sparkles, Users, Recycle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Style Assistant",
  },
  {
    icon: Users,
    title: "Trusted Circles",
  },
  {
    icon: Recycle,
    title: "Sustainable Fashion",
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
              <h3 className="text-xl font-semibold text-neutral">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};