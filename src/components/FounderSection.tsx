import { Instagram, Quote } from "lucide-react";
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
                href="https://wa.me/+919818228017"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/propertybypankaj?igsh=MXFiNXdmMWZxdmhwbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
