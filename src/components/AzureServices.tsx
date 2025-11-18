import { Card } from "@/components/ui/card";
import { Cloud, ArrowRightLeft, TrendingUp, Settings } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Azure Hosting",
    description:
      "Dive into the world of cloud to grow your business with Azure hosting services offered by AptaCloud. We will assist you with range of cloud services, including cloud computing, networking, securing your workloads, and enhancing the scalability of your applications.",
  },
  {
    icon: ArrowRightLeft,
    title: "Azure Migration",
    description:
      "Migrate your servers, applications, databases, and more with ease in the Azure environment with the assistance of AptaCloud. Our expert team will assess your on-premises, AWS, and other cloud workloads and, based on your requirements, will suggest the right Azure resources for your business.",
  },
  {
    icon: TrendingUp,
    title: "Azure Optimization",
    description:
      "Maximize the value of your Azure investment with AptaCloud. We fine-tune your cloud infrastructure for peak performance, cost efficiency, and scalability.",
  },
  {
    icon: Settings,
    title: "Azure Managed Services",
    description:
      "Let AptaCloud manage your Azure ecosystem—ensuring 24/7 monitoring, proactive support, and seamless performance, so you can focus on growing your business.",
  },
];

export default function AzureServices() {
  return (
    <section id="azure" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Modernize Your Infrastructure with Azure & AptaCloud
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            AptaCloud delivers end-to-end Azure solutions to empower your IT
            landscape—enabling smarter operations, enhanced data security, and
            seamless digital transformation for enterprises of any size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all"
                data-testid={`azure-service-${index}`}
              >
                <div className="mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 inline-flex">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
