import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function BrandFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [shouldLoad, reducedMotion]);

  return (
    <section ref={sectionRef} className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-secondary/20">
      {shouldLoad && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/video/brand-film.mp4"
          poster="/assets/showcase-1.jpg"
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6">In Motion</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">The VELMONT Edit</h2>
      </motion.div>
    </section>
  );
}
