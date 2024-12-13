import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Crafting Beautiful
              <span className="text-primary block">Mobile Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Senior Mobile Developer specializing in creating stunning, user-friendly
              applications that make a difference. With over 5 years of experience in
              iOS and Android development.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-primary/40 absolute -z-10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}