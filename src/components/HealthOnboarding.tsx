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
  Shield
} from "lucide-react";
import exampleImage from 'figma:asset/c1137999149079f73ee85b59039702a74a80e384.png';

interface HealthOnboardingProps {
  onComplete: () => void;
}

export function HealthOnboarding({ onComplete }: HealthOnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to JanMitra",
      subtitle: "Your Digital Government Companion",
      description: "Access all government services from one beautiful, easy-to-use app",
      icon: Heart,
      gradient: "from-purple-100 via-blue-100 to-indigo-100"
    },
    {
      title: "Smart Services",
      subtitle: "Everything You Need",
      description: "Apply for certificates, file complaints, and track applications with ease",
      icon: FileText,
      gradient: "from-blue-100 via-indigo-100 to-purple-100"
    },
    {
      title: "Stay Connected",
      subtitle: "Real-time Updates",
      description: "Get instant notifications about your applications and city news",
      icon: Bell,
      gradient: "from-indigo-100 via-purple-100 to-pink-100"
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
    <div className={`min-h-screen bg-gradient-to-br ${currentSlideData.gradient} flex flex-col`}>
      {/* Header with logo */}
      <div className="pt-16 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-20 h-20 mx-auto mb-4 bg-white rounded-3xl flex items-center justify-center shadow-lg"
        >
          <Smartphone className="w-10 h-10 text-purple-600" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          JanMitra
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          Aapka Digital Mitra
        </motion.p>
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
              className="w-32 h-32 mx-auto health-block flex items-center justify-center mb-6"
            >
              <currentSlideData.icon className="w-16 h-16 text-purple-600" />
            </motion.div>
          </div>

          {/* Text content block */}
          <Card className="health-block p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentSlideData.title}
            </h2>
            <h3 className="text-lg font-medium text-purple-600">
              {currentSlideData.subtitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {currentSlideData.description}
            </p>
          </Card>

          {/* Features preview */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Users, label: "Community" },
              { icon: Shield, label: "Secure" },
              { icon: FileText, label: "Simple" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="health-block p-4 text-center">
                  <feature.icon className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">{feature.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="p-6 space-y-6">
        {/* Progress dots */}
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: currentSlide === index ? 1.2 : 1,
                backgroundColor: currentSlide === index ? '#7c3aed' : '#d1d5db'
              }}
              className="w-3 h-3 rounded-full transition-all duration-300"
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="space-y-3">
          <Button
            onClick={nextSlide}
            className="w-full h-14 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          
          {currentSlide < slides.length - 1 && (
            <Button
              onClick={onComplete}
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-800"
            >
              Skip
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}