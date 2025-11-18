import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI Smart Revolution",
    subtitle: "Revolutionize with Artificial Intelligence Smart Success",
    description:
      "Harness the power of AI to transform your business and drive efficiency.",
    cta: "Learn More",
    image: "/assets/generated_images/AI_Smart_Revolution_hero_3cfca4cb.png",
  },
  {
    id: 2,
    title: "Cloud Power Unleashed",
    subtitle: "High-Performance Powered by Microsoft Azure",
    description:
      "Deliver secure, scalable, and resilient infrastructure with Microsoft Azure.",
    cta: "Learn More",
    image: "/assets/generated_images/Cloud_Power_hero_background_815fb510.png",
  },
  {
    id: 3,
    title: "Microsoft Business Suite",
    subtitle: "Supercharge Your Business with Microsoft",
    description:
      "Unlock unparalleled productivity and innovation with our Microsoft expertise.",
    cta: "Learn More",
    image:
      "/assets/generated_images/Microsoft_Business_Suite_hero_dd6a5232.png",
  },
  {
    id: 4,
    title: "NetSuite Operational Excellence",
    subtitle: "Elevate Your Operations with NetSuite Excellence",
    description:
      "Streamline processes and boost performance with our NetSuite solutions.",
    cta: "Learn More",
    image:
      "/assets/generated_images/NetSuite_Excellence_hero_background_03481618.png",
  },
  {
    id: 5,
    title: "App Modernization Mastery",
    subtitle: "Future-Proof Your Business with Modernized Applications",
    description:
      "Transform legacy systems into cutting-edge solutions for sustained growth.",
    cta: "Learn More",
    image:
      "/assets/generated_images/App_Modernization_hero_background_2e58049b.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= slides.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? slides.length - 1 : next;
    });
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
              <div className="max-w-2xl ml-4 md:ml-8 lg:ml-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 text-foreground/90">
                  {slide.description}
                </p>
                <Button size="lg" data-testid={`button-cta-${index}`}>
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/20 hover:bg-background/90 shadow-lg transition-all hover:scale-110 opacity-50 hover:opacity-100"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6 text-background hover:text-foreground transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/20 hover:bg-background/90 shadow-lg transition-all hover:scale-110 opacity-50 hover:opacity-100"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6 text-background hover:text-foreground transition-colors" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-background/60"
            }`}
            data-testid={`button-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
