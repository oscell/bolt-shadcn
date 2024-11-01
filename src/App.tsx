import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Your App</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Get started by clicking the button below
        </p>
        <Button 
          size="lg"
          className="group relative overflow-hidden bg-primary hover:bg-primary/90 transform transition-all hover:scale-105 duration-200"
        >
          <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          Get Started
          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>
      </div>
    </div>
  );
}

export default App;