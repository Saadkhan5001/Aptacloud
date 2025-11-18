import { Card } from "@/components/ui/card";
import { FileText, Users, Bot, Zap } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Microsoft SharePoint",
    description:
      "Enable better content management and collaboration with Microsoft SharePoint. We help you organize, share, and access important documents and data seamlessly.",
  },
  {
    icon: Users,
    title: "Microsoft 365",
    description:
      "Empower your workforce with Microsoft 365, a complete suite of productivity tools that drive collaboration and efficiency.",
  },
  {
    icon: Bot,
    title: "Microsoft Copilot",
    description:
      "Unlock the potential of AI with Microsoft Copilot. Whether automating repetitive tasks or providing intelligent insights.",
  },
  {
    icon: Zap,
    title: "Power Platform",
    description:
      "Leverage Microsoft's Power Platform to build low-code applications, automate workflows, and analyze data.",
  },
];

export default function MicrosoftServices() {
  return (
    <section id="microsoft" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Unlock the Power of Microsoft with AptaCloud
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            At AptaCloud, we bring you the full suite of Microsoft services to
            help your business achieve greater efficiency, collaboration, and
            security. Our tailored solutions are designed to seamlessly
            integrate into your operations, ensuring that your team has the
            tools they need to succeed. Explore our range of Microsoft offerings
            below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all group"
                data-testid={`microsoft-service-${index}`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
