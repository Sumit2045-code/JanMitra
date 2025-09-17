import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronRight, Users, Shield, Clock } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const features = [
    {
      icon: Users,
      title: "Easy Access",
      description: "Access all citizen services in one place"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your data is protected with advanced security"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Services available round the clock"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">CitizenConnect</h1>
            <p className="text-gray-600 mt-2">Your gateway to government services</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Get Started Button */}
        <Button 
          onClick={onComplete}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 shadow-lg"
        >
          Get Started
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}