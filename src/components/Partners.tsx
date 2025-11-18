import { Cloud } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div
            className="grayscale hover:grayscale-0 transition-all"
            data-testid="partner-microsoft"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#00A4EF]">
              Microsoft
            </div>
          </div>
          <div
            className="grayscale hover:grayscale-0 transition-all"
            data-testid="partner-netsuite"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#E95420]">
              NetSuite
            </div>
          </div>
          <div
            className="grayscale hover:grayscale-0 transition-all flex items-center gap-2"
            data-testid="partner-aws"
          >
            <Cloud className="w-12 h-12 md:w-16 md:h-16 text-[#FF9900]" />
            <div className="text-3xl md:text-4xl font-bold text-[#FF9900]">
              AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
