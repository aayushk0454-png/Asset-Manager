import { useRef } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { NotifyMeForm } from "@/components/notify-form";
import { Countdown } from "@/components/countdown";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="bg-background min-h-[100dvh] text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Nav />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Background image generated via prompt */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-12 gold-shimmer"
          >
            <img 
              src="/assets/velmont-logo.png" 
              alt="VELMONT Emblem" 
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6 text-foreground">
              VELMONT
            </h1>
            <p className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm font-sans mb-8">
              Luxury Streetwear. Timeless Confidence.
            </p>
            <p className="text-muted-foreground font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Crafted for those who appreciate premium oversized essentials, exceptional quality, and timeless minimalism.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={() => scrollTo("about")}
                variant="outline" 
                className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-widest text-xs h-14 px-10 transition-all duration-300 rounded-none bg-background/50 backdrop-blur-sm"
              >
                Explore Our Vision
              </Button>
              <Button 
                onClick={() => scrollTo("launch")}
                variant="ghost" 
                className="w-full sm:w-auto text-muted-foreground hover:text-foreground font-sans tracking-widest text-xs h-14 px-10 rounded-none"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Scroll</span>
          <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[bounce_2s_infinite]" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                Crafted for <br />
                <span className="italic text-primary/80">Modern Luxury</span>
              </h2>
              <div className="w-12 h-[1px] bg-primary mb-8" />
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-8">
                VELMONT is built around the philosophy that luxury is found in quality, simplicity, and confidence. Every oversized silhouette reflects timeless design, premium craftsmanship, and modern elegance.
              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                We design for those who want their clothing to feel expensive without shouting about it. Think of it as a private atelier—quiet, confident, and meticulously crafted.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-secondary/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img 
                src="/assets/showcase-1.jpg" 
                alt="Velmont Showcase" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-32 px-6 md:px-12 bg-secondary/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Philosophy</h2>
            <div className="w-px h-12 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                title: "Premium Quality",
                desc: "Heavyweight fabrics and meticulous craftsmanship. Every thread, seam, and stitch is considered to ensure enduring luxury."
              },
              {
                title: "Modern Minimalism",
                desc: "Clean silhouettes designed for everyday confidence. We strip away the unnecessary to reveal the essential."
              },
              {
                title: "Timeless Style",
                desc: "Fashion that remains relevant beyond trends. Pieces that age beautifully and stay anchored in your wardrobe for years."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <span className="font-serif text-5xl text-border mb-6 group-hover:text-primary transition-colors duration-500">
                  0{i + 1}
                </span>
                <h3 className="font-sans tracking-widest uppercase text-sm mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE PARALLAX SECTION */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <div className="aspect-square relative overflow-hidden mb-8 group">
              <img 
                src="/assets/showcase-2.jpg" 
                alt="Velmont Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">The Silhouette</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center md:-mt-32"
          >
            <div className="aspect-[3/4] relative overflow-hidden mb-8 group">
              <img 
                src="/assets/showcase-4.jpg" 
                alt="Velmont Accessories" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground text-right">The Details</p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SECTION */}
      <section id="collection" className="py-32 px-6 md:px-12 bg-secondary/20 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">Preview</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Collection</h2>
            <div className="w-px h-12 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/assets/products/product-01.jpg", label: "Wide-Leg Denim" },
              { src: "/assets/products/product-02.jpg", label: "Striped Oxford" },
              { src: "/assets/products/product-03.jpg", label: "Overshirt" },
              { src: "/assets/products/product-04.jpg", label: "Graphic Layer Tee" },
              { src: "/assets/products/product-05.jpg", label: "Tailored Trouser" },
              { src: "/assets/products/product-06.png", label: "Washed Graphic Tee" },
              { src: "/assets/products/product-07.jpg", label: "Printed Shirt" },
              { src: "/assets/products/product-08.jpg", label: "Relaxed Denim" },
              { src: "/assets/products/product-09.jpg", label: "Motif Tee" },
              { src: "/assets/products/product-10.jpg", label: "Gingham Shirt" },
              { src: "/assets/products/product-11.jpg", label: "Court Sneaker" },
              { src: "/assets/products/product-12.jpg", label: "Structured Cap" },
            ].map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden bg-secondary/40 group"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 left-4 right-4 font-sans text-[10px] md:text-xs tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-32 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-16">The People Behind VELMONT</h2>
            
            <div className="space-y-16">
              <div>
                <span className="block font-sans text-xs tracking-[0.2em] text-primary uppercase mb-4">Founder</span>
                <h3 className="font-serif text-4xl text-foreground/90">Aayush Kumar Yadav</h3>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                <div>
                  <span className="block font-sans text-xs tracking-[0.2em] text-primary uppercase mb-4">Co-Founder</span>
                  <h3 className="font-serif text-2xl text-foreground/80">Abhay Kumar</h3>
                </div>
                <div>
                  <span className="block font-sans text-xs tracking-[0.2em] text-primary uppercase mb-4">Co-Founder</span>
                  <h3 className="font-serif text-2xl text-foreground/80">Aditya Kumar</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAUNCH SECTION */}
      <section id="launch" className="py-32 px-6 md:px-12 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Subtle background element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/assets/showcase-3.jpg" alt="Background" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6">Kishanganj, Bihar</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">Launching Soon</h2>
            
            <Countdown />

            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              VELMONT is preparing to introduce a new standard of premium streetwear. Stay connected and be among the first to experience our launch.
            </p>

            <NotifyMeForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
