import { Linkedin, Mail, Quote } from "lucide-react";
import founderImage from "@/assets/founder-photo.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Founder Image */}
          <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Pankaj Yadav - Founder of Noida Realtors"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-gold">
                <span className="font-semibold">Founder & CEO</span>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute top-8 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-0" />
          </div>

          {/* Founder Info */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
              Pankaj Yadav
            </h3>
            <p className="text-accent font-medium mb-6">
              Founder & Chief Executive Officer
            </p>

            <div className="relative mb-8">
              <Quote className="w-10 h-10 text-accent/30 absolute -top-2 -left-2" />
              <p className="text-muted-foreground leading-relaxed pl-8 italic">
                "My vision is to transform the real estate experience in Noida
                by bringing transparency, trust, and professionalism to every
                transaction. I believe every family deserves their dream home,
                and every investor deserves honest guidance."
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                With over a decade of experience in the Noida real estate
                market, <strong className="text-foreground">Pankaj Yadav</strong>{" "}
                founded Noida Realtors with a clear mission: to create a
                client-first real estate company that prioritizes trust and
                transparency above all else.
              </p>
              <p className="leading-relaxed">
                His deep understanding of the local property market, combined
                with a network of trusted developers and industry connections,
                has helped hundreds of families find their perfect homes. Under
                his leadership, Noida Realtors has grown to become one of the
                most trusted names in the Noida real estate industry.
              </p>
              <p className="leading-relaxed">
                Pankaj's hands-on approach and dedication to customer
                satisfaction have earned the company numerous accolades and, more
                importantly, the trust of countless satisfied clients.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
