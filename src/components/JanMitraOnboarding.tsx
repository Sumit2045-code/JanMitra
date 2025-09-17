import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  Globe, 
  Heart,
  Star,
  Sparkles,
  Users,
  Award
} from "lucide-react";
import { motion } from "motion/react";

interface JanMitraOnboardingProps {
  onComplete: () => void;
}

export function JanMitraOnboarding({ onComplete }: JanMitraOnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const slides = [
    {
      title: "JanMitra",
      subtitle: "Aapka Digital Mitra",
      description: "Your friendly digital companion for all government services",
      icon: Heart,
      gradient: "from-[#3151b8] via-[#33d9b2] to-[#ff9800]",
      features: ["One-stop solution", "24/7 availability", "Secure & trusted"]
    },
    {
      title: "Smart Services",
      subtitle: "सेवा में तेज़ी",
      description: "Lightning-fast access to certificates, complaints, and applications",
      icon: Zap,
      gradient: "from-[#ff9800] via-[#33d9b2] to-[#8b5cf6]",
      features: ["Instant processing", "Real-time tracking", "Digital certificates"]
    },
    {
      title: "Secure & Safe",
      subtitle: "आपका डेटा सुरक्षित",
      description: "Bank-level security with biometric authentication",
      icon: Shield,
      gradient: "from-[#33d9b2] via-[#3151b8] to-[#ec4899]",
      features: ["End-to-end encryption", "Biometric security", "Privacy first"]
    },
    {
      title: "Connected Community",
      subtitle: "समुदाय से जुड़ें",
      description: "Stay updated with your city and earn rewards for participation",
      icon: Globe,
      gradient: "from-[#8b5cf6] via-[#ff9800] to-[#33d9b2]",
      features: ["Community updates", "Reward system", "Social engagement"]
    }
  ];

  const currentSlideData = slides[currentSlide];

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${currentSlideData.gradient}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-white/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm"
        />
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: -20, 
                rotate: 0,
                scale: 0 
              }}
              animate={{ 
                y: window.innerHeight + 20, 
                rotate: 360,
                scale: 1 
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                ease: "easeOut",
                delay: Math.random() * 0.5 
              }}
              className={`absolute w-3 h-3 ${
                i % 4 === 0 ? 'bg-yellow-400' : 
                i % 4 === 1 ? 'bg-pink-400' : 
                i % 4 === 2 ? 'bg-blue-400' : 'bg-green-400'
              } rounded-sm`}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Main Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            {/* Animated Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative mx-auto"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto shadow-2xl neon-border">
                <currentSlideData.icon className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </motion.div>
            </motion.div>

            {/* Title and Subtitle */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white drop-shadow-lg"
              >
                {currentSlideData.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 font-medium"
              >
                {currentSlideData.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/80 leading-relaxed px-4"
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              {currentSlideData.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Card className="glassmorphism border-white/30 p-4 interactive-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-2"
          >
            {slides.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: currentSlide === index ? 1.2 : 1,
                  backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'
                }}
                className="w-3 h-3 rounded-full transition-all duration-300"
              />
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex space-x-4"
          >
            {currentSlide > 0 && (
              <Button
                onClick={prevSlide}
                variant="outline"
                className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-md rounded-2xl h-14 ripple"
              >
                Previous
              </Button>
            )}
            <Button
              onClick={nextSlide}
              className="flex-1 bg-white text-gray-900 hover:bg-white/90 rounded-2xl h-14 font-semibold shadow-lg ripple"
            >
              {currentSlide === slides.length - 1 ? (
                <>
                  Get Started
                  <Sparkles className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Skip Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-center"
          >
            <Button
              onClick={onComplete}
              variant="link"
              className="text-white/70 hover:text-white"
            >
              Skip Introduction
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}