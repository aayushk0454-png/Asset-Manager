import * as React from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export function NotifyMeForm() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "You're on the list.",
        description: "We'll notify you when VELMONT drops.",
        className: "bg-background border-border text-foreground font-sans"
      })
      setEmail("")
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto sm:space-x-4 space-y-4 sm:space-y-0">
      <input 
        type="email" 
        placeholder="Enter your email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent border-b border-border/50 px-4 py-3 text-center sm:text-left focus:outline-none focus:border-primary font-sans font-light text-foreground placeholder:text-muted-foreground transition-colors"
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="rounded-none bg-primary text-primary-foreground hover:bg-primary/80 font-sans tracking-widest text-xs uppercase px-8 h-12"
      >
        {loading ? "Registering..." : "Notify Me"}
      </Button>
    </form>
  )
}
