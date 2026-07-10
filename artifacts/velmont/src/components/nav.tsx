import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500",
        scrolled ? "h-20 bg-background/80 backdrop-blur-md border-b border-border/50" : "h-28 bg-transparent"
      )}
    >
      <div className="flex-1 flex justify-start">
        <div className="hidden md:flex items-center space-x-8 text-sm font-sans tracking-widest text-muted-foreground uppercase">
          <button onClick={() => scrollTo("home")} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("philosophy")} className="hover:text-primary transition-colors">Philosophy</button>
          <button onClick={() => scrollTo("collection")} className="hover:text-primary transition-colors">Collection</button>
        </div>
      </div>

      <div className="flex-shrink-0 flex items-center justify-center gap-4 cursor-pointer group" onClick={() => scrollTo("home")}>
        <div className={cn("relative rounded-full overflow-hidden gold-shimmer transition-all duration-500", scrolled ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-14 md:h-14")}>
          <img src="/assets/velmont-logo.png" alt="VELMONT Logo" className="w-full h-full object-cover scale-110" />
        </div>
        <span className={cn("font-serif tracking-[0.3em] transition-all duration-500 hidden md:block group-hover:text-primary", scrolled ? "text-xl" : "text-2xl")}>
          VELMONT
        </span>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="hidden md:flex items-center space-x-8 text-sm font-sans tracking-widest text-muted-foreground uppercase">
          <button onClick={() => scrollTo("team")} className="hover:text-primary transition-colors">Team</button>
          <button onClick={() => scrollTo("launch")} className="hover:text-primary transition-colors">Launch</button>
          <button onClick={() => scrollTo("footer")} className="hover:text-primary transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
}
