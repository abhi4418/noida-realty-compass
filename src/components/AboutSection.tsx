import { Shield, Users, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in honest dealings and transparent processes in every transaction.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to meet your needs.",
    },
    {
      icon: TrendingUp,
      title: "Investment Expertise",
      description:
        "Get expert advice on property investments that maximize your returns.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every property we deal with is thoroughly verified for quality and legality.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              Building Dreams, Creating Homes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Noida Realtors</strong> is a
              dynamic real estate startup based in Noida, dedicated to helping
              individuals and businesses find their perfect properties. We
              specialize in residential, commercial, and investment properties
              across Noida and the NCR region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of experienced professionals understands the local market
              inside out. We combine industry expertise with personalized
              service to ensure every client finds exactly what they're looking
              for. Whether you're a first-time buyer, a seasoned investor, or a
              business seeking commercial space, we're here to guide you through
              every step of your real estate journey.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary rounded-xl p-6 text-center">
                  <span className="text-4xl font-serif font-bold text-primary-foreground">
                    100%
                  </span>
                  <p className="text-primary-foreground/80 text-sm mt-2">
                    Client Satisfaction
                  </p>
                </div>
                <div className="bg-accent rounded-xl p-6 text-center">
                  <span className="text-4xl font-serif font-bold text-accent-foreground">
                    24/7
                  </span>
                  <p className="text-accent-foreground/80 text-sm mt-2">
                    Customer Support
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <span className="text-4xl font-serif font-bold text-foreground">
                    ₹50Cr+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">
                    Properties Sold
                  </p>
                </div>
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <span className="text-4xl font-serif font-bold text-primary">
                    200+
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">
                    Happy Families
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-xl border border-border">
                <p className="text-muted-foreground text-center italic">
                  "Our mission is to make property buying seamless, transparent,
                  and rewarding for every customer."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
