import { ArrowRight, MapPin, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury building in Noida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Serving Noida & NCR</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your Trusted Real Estate{" "}
            <span className="text-gradient-gold">Partner in Noida</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            We specialize in residential and commercial properties across Noida.
            Whether you're looking to buy your dream home, invest in commercial
            real estate, or find the perfect rental, our expert team is here to
            guide you every step of the way.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              variant="accent"
              onClick={scrollToContact}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline-hero" onClick={scrollToContact}>
              View Properties
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Home className="w-5 h-5 text-accent" />
                <span className="text-3xl font-serif font-bold text-primary-foreground">
                  500+
                </span>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Properties Sold
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Building className="w-5 h-5 text-accent" />
                <span className="text-3xl font-serif font-bold text-primary-foreground">
                  10+
                </span>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Years Experience
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-3xl font-serif font-bold text-primary-foreground">
                  50+
                </span>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Sectors Covered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
