import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import {
  getServicePageBySlug,
  type ServicePageContent,
} from "@/data/serviceCategories";

interface ServiceCategoryPageProps {
  slug?: string;
}

export default function ServiceCategoryPage({
  slug,
}: ServiceCategoryPageProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const pageData = useMemo<ServicePageContent | undefined>(
    () => getServicePageBySlug(slug),
    [slug]
  );

  if (!pageData) {
    return <NotFound />;
  }

  const handleContactClick = () => setContactModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onContactClick={handleContactClick} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80 mb-6">
              {pageData.hero.eyebrow}
            </p>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {pageData.hero.headline}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  {pageData.hero.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {pageData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border bg-card/80 backdrop-blur p-6"
                  >
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                What we deliver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {pageData.summary}
              </p>
            </div>
            <div className="grid gap-4">
              {pageData.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border rounded-2xl p-5 bg-card shadow-sm"
                >
                  <p className="text-base text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                  Capabilities
                </p>
                <h2 className="text-3xl font-semibold text-foreground">
                  Services under {pageData.title}
                </h2>
              </div>
              <Button variant="secondary" onClick={handleContactClick}>
                Talk to an expert
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pageData.services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-3xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20">
          <div className="rounded-3xl border bg-card/70 backdrop-blur p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.35em] text-primary/80 mb-3">
                  Technology partners
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Built on proven platforms
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  We combine reference architectures with the tools you already
                  use so adoption sticks and teams stay in flow.
                </p>
                <div className="flex flex-wrap gap-3">
                  {pageData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border bg-background text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-12 md:py-20 border-y">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground/70 mb-2">
                  Next step
                </p>
                <h3 className="text-3xl font-semibold mb-3">
                  {pageData.cta.title}
                </h3>
                <p className="text-base text-primary-foreground/80 max-w-2xl">
                  {pageData.cta.description}
                </p>
              </div>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="text-primary font-semibold"
              >
                {pageData.cta.buttonLabel}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

