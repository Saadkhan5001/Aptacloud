import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onGetStartedClick: () => void;
}

export default function CTASection({ onGetStartedClick }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 gradient-accent text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Enterprise-Grade Solutions for Connected, AI Driven Growing Businesses
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Book a free consultation today to talk about our services.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={onGetStartedClick}
          className="text-lg px-8"
          data-testid="button-get-started"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
}
