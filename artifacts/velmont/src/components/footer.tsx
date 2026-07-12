import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-background pt-24 pb-12 border-t border-border/30 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl tracking-wider mb-6 text-primary">VELMONT</h3>
            <p className="text-muted-foreground font-sans font-light tracking-wide max-w-sm leading-relaxed mb-6">
              Luxury Streetwear. Timeless Confidence.<br />
              Launching Soon in Kishanganj, Bihar.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/velmont__2026?utm_source=qr&igsh=eXh6aWlzYm85Z3cx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-6">The Team</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-sans font-light">
              <li><span className="text-foreground/70">Founder:</span> Aayush Kumar Yadav</li>
              <li><span className="text-foreground/70">Co-Founders:</span></li>
              <li className="pl-4">Abhay Kumar</li>
              <li className="pl-4">Aditya Kumar</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-sans font-light">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li className="pt-4 mt-4 border-t border-border/30">
                <span className="text-primary block mb-1">Fast & Reliable Delivery</span>
                Orders will be delivered within 2-3 business days after dispatch.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30 text-xs font-sans tracking-widest text-muted-foreground uppercase">
          <p>&copy; {new Date().getFullYear()} VELMONT. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Kishanganj, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
