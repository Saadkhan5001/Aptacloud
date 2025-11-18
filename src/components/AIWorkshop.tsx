import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "In-depth AI Analysis",
    description:
      "Get a comprehensive evaluation of your current systems and processes.",
  },
  {
    icon: Target,
    title: "Customized AI Strategy",
    description:
      "Receive a personalized roadmap to integrate AI into your business.",
  },
  {
    icon: Users,
    title: "Hands-on Experience",
    description: "Participate in interactive sessions with our AI experts.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Learn practical steps to implement AI solutions effectively.",
  },
];

const features = [
  {
    title: "Expert Guidance",
    description: "Led by industry-leading AI professionals.",
  },
  {
    title: "Tailored Solutions",
    description: "Focused on your unique business needs.",
  },
  {
    title: "Proven Results",
    description: "Empower your business with cutting-edge AI strategies.",
  },
];

interface AIWorkshopProps {
  onBookClick: () => void;
}

export default function AIWorkshop({ onBookClick }: AIWorkshopProps) {
  return (
    <section
      id="ai"
      className="py-16 md:py-24 gradient-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock the Power of AI with Our Exclusive Workshop
          </h2>
          <p className="text-lg md:text-xl mb-2">
            Are you confused about too much AI noise?
          </p>
          <p className="text-lg md:text-xl mb-6">
            Want to know how AI can really impact and change your business?
          </p>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Our tailored AI assessment workshop is designed to help you
            understand how artificial intelligence (AI) can automate your
            operations and drive growth.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What You'll Gain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-background/10 backdrop-blur-sm border-background/20 text-primary-foreground hover-elevate transition-all"
                  data-testid={`benefit-card-${index}`}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why choose Our Workshop?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-background/10 backdrop-blur-sm border-background/20 text-primary-foreground text-center hover-elevate transition-all"
                data-testid={`feature-card-${index}`}
              >
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg mb-8">
            Sign Up Now for our exclusive AI assessment workshop.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onBookClick}
            className="text-lg px-8"
            data-testid="button-book-workshop"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
