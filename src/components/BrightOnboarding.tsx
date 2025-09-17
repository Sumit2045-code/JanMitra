import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Users, 
  FileText, 
  Bell,
  Smartphone,
  Heart,
  Shield,
  Star
} from "lucide-react";

interface BrightOnboardingProps {
  onComplete: () => void;
}

export function BrightOnboarding({ onComplete }: BrightOnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to JanMitra",
      subtitle: "Your Digital Government Companion",
      description: "Access all government services from one beautiful, easy-to-use app",
      icon: Heart,
      bgGradient: "from-purple-50 via-pink-50 to-rose-50",
      iconBg: "#bca4ff"
    },
    {
      title: "Smart Services",
      subtitle: "Everything You Need",
      description: "Apply for certificates, file complaints, and track applications with ease",
      icon: FileText,
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      iconBg: "#a3e0ff"
    },
    {
      title: "Stay Connected",
      subtitle: "Real-time Updates",
      description: "Get instant notifications about your applications and city news",
      icon: Bell,
      bgGradient: "from-green-50 via-emerald-50 to-mint-50",
      iconBg: "#b4f8c8"
    }
  ];

  const currentSlideData = slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${currentSlideData.bgGradient} flex flex-col`}
      style={{
        background: `linear-gradient(135deg, #f0efff 0%, #ffe8f0 100%)`
      }}
    >
      {/* Header with logo */}
      <div className="pt-16 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-xl"
          style={{ backgroundColor: currentSlideData.iconBg }}
        >
          <Smartphone className="w-12 h-12 text-white" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-3"
          style={{ color: "#2b2352" }}
        >
          JanMitra
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg font-medium"
          style={{ color: "#43165c" }}
        >
          Aapka Digital Mitra
        </motion.p>
        
        {/* Cute Waving Hand Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 10 }}
          className="flex items-center justify-center mt-6"
        >
          <motion.div
            animate={{ 
              rotate: [0, 14, -8, 14, -4, 10, 0, 0],
              scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="text-5xl select-none"
            style={{ transformOrigin: "70% 70%" }}
          >
            👋
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="ml-4 text-2xl font-bold"
            style={{ color: "#43165c" }}
          >
            Namaste!
          </motion.span>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Icon block */}
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-36 h-36 mx-auto rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
              style={{ backgroundColor: currentSlideData.iconBg }}
            >
              <currentSlideData.icon className="w-20 h-20 text-white" />
            </motion.div>
          </div>

          {/* Text content block */}
          <Card 
            className="p-8 text-center space-y-6 rounded-3xl border-0 shadow-xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
          >
            <h2 
              className="text-3xl font-bold"
              style={{ color: "#2b2352" }}
            >
              {currentSlideData.title}
            </h2>
            <h3 
              className="text-xl font-semibold"
              style={{ color: "#43165c" }}
            >
              {currentSlideData.subtitle}
            </h3>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: "#43165c" }}
            >
              {currentSlideData.description}
            </p>
          </Card>

          {/* Features preview */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Users, label: "Community", bg: "#fad2e1" },
              { icon: Shield, label: "Secure", bg: "#b4f8c8" },
              { icon: Star, label: "Simple", bg: "#ffe1ae" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card 
                  className="p-6 text-center rounded-2xl border-0 shadow-lg"
                  style={{ backgroundColor: feature.bg }}
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                  <p 
                    className="text-sm font-bold"
                    style={{ color: "#2b2352" }}
                  >
                    {feature.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="p-6 space-y-6">
        {/* Progress dots */}
        <div className="flex justify-center space-x-4">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: currentSlide === index ? 1.4 : 1,
                backgroundColor: currentSlide === index ? '#43165c' : '#bca4ff'
              }}
              className="w-4 h-4 rounded-full transition-all duration-300"
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="space-y-4">
          <Button
            onClick={nextSlide}
            className="w-full h-16 text-white rounded-3xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ 
              background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
            }}
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
            <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
          
          {currentSlide < slides.length - 1 && (
            <Button
              onClick={onComplete}
              variant="ghost"
              className="w-full font-medium"
              style={{ color: "#43165c" }}
            >
              Skip
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}