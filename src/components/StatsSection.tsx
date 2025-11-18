import { Users, Award, Building2, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "300+",
    label: "Clients Served",
  },
  {
    icon: Building2,
    value: "200+",
    label: "Engineers Under One Roof",
  },
  {
    icon: Globe,
    value: "4+",
    label: "Global Delivery Locations",
  },
];

export default function StatsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            AptaCloud is a Dallas-based firm specializing in modern cloud
            systems and AI integration, with a strong focus on Microsoft-centric
            solutions and enterprise cloud services. We help businesses
            streamline operations, improve collaboration, and scale effectively
            through tailored Cloud, Data, IT, and AI offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4 md:px-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-elevate transition-all"
                data-testid={`stat-card-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 text-primary"
                  data-testid={`stat-value-${index}`}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm md:text-base text-muted-foreground"
                  data-testid={`stat-label-${index}`}
                >
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
