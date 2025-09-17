import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Phone, 
  Ambulance, 
  Flame, 
  Shield, 
  PhoneCall,
  Clock,
  MapPin,
  Heart,
  Users,
  Car,
  AlertTriangle
} from "lucide-react";

interface BrightEmergencyProps {
  onBack: () => void;
}

export function BrightEmergency({ onBack }: BrightEmergencyProps) {
  const [activeCall, setActiveCall] = useState<string | null>(null);

  const emergencyContacts = [
    {
      service: "Police",
      number: "100",
      description: "Crime & Safety",
      icon: Shield,
      bg: "#a3e0ff",
      textColor: "#2b2352"
    },
    {
      service: "Fire Department",
      number: "101",
      description: "Fire & Rescue",
      icon: Flame,
      bg: "#fad2e1",
      textColor: "#2b2352"
    },
    {
      service: "Medical Emergency",
      number: "108",
      description: "Health Emergency",
      icon: Ambulance,
      bg: "#b4f8c8",
      textColor: "#2b2352"
    }
  ];

  const quickServices = [
    {
      title: "Women Helpline",
      number: "1091",
      icon: Heart,
      bg: "#fad2e1"
    },
    {
      title: "Child Helpline",
      number: "1098",
      icon: Users,
      bg: "#bca4ff"
    },
    {
      title: "Traffic Police",
      number: "103",
      icon: Car,
      bg: "#a3e0ff"
    },
    {
      title: "Disaster Help",
      number: "1070",
      icon: AlertTriangle,
      bg: "#ffe1ae"
    }
  ];

  const handleEmergencyCall = (number: string) => {
    setActiveCall(number);
    setTimeout(() => setActiveCall(null), 3000);
    window.open(`tel:${number}`);
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #fff8f0 0%, #ffe8f0 100%)"
      }}
    >
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack} 
              className="mr-4 p-3 rounded-2xl shadow-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <ArrowLeft className="w-6 h-6" style={{ color: "#43165c" }} />
            </Button>
            <div>
              <h1 
                className="text-3xl font-bold"
                style={{ color: "#2b2352" }}
              >
                Emergency
              </h1>
              <p 
                className="text-lg font-semibold"
                style={{ color: "#43165c" }}
              >
                Quick access to help
              </p>
            </div>
          </div>
          <Badge 
            className="px-4 py-2 rounded-full font-bold"
            style={{ backgroundColor: "#fad2e1", color: "#2b2352" }}
          >
            24/7 Available
          </Badge>
        </div>

        {/* SOS Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-center mb-10"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleEmergencyCall("112")}
            className="relative w-44 h-44 mx-auto rounded-full shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#fad2e1" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <PhoneCall className="w-12 h-12 mb-3" />
              <span className="text-2xl font-bold">SOS</span>
              <span className="text-lg font-semibold">Emergency</span>
            </div>
          </motion.button>
          <p 
            className="mt-6 text-lg font-semibold"
            style={{ color: "#43165c" }}
          >
            Tap for immediate assistance (112)
          </p>
        </motion.div>
      </div>

      <div className="px-6 space-y-8">
        {/* Emergency Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: "#2b2352" }}
          >
            Emergency Services
          </h2>
          <div className="space-y-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card 
                  className="p-8 rounded-3xl border-0 shadow-xl"
                  style={{ backgroundColor: contact.bg }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 rounded-3xl bg-white/50 flex items-center justify-center shadow-lg">
                        <contact.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 
                          className="font-bold text-2xl mb-2"
                          style={{ color: contact.textColor }}
                        >
                          {contact.service}
                        </h3>
                        <p 
                          className="font-semibold text-lg mb-3"
                          style={{ color: "#43165c" }}
                        >
                          {contact.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-5 h-5" style={{ color: "#43165c" }} />
                          <span 
                            className="font-bold text-xl"
                            style={{ color: contact.textColor }}
                          >
                            {contact.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleEmergencyCall(contact.number)}
                      className="text-white rounded-2xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                      style={{ 
                        background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
                      }}
                      disabled={activeCall === contact.number}
                    >
                      {activeCall === contact.number ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Calling...
                        </>
                      ) : (
                        <>
                          <PhoneCall className="w-5 h-5 mr-2" />
                          Call
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Helplines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: "#2b2352" }}
          >
            Other Helplines
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEmergencyCall(service.number)}
              >
                <Card 
                  className="p-6 rounded-3xl border-0 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{ backgroundColor: service.bg }}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-white/50 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg leading-tight mb-2"
                        style={{ color: "#2b2352" }}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: "#43165c" }}
                      >
                        {service.number}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Card 
            className="p-8 rounded-3xl border-0 shadow-xl"
            style={{ backgroundColor: "#a3e0ff" }}
          >
            <div className="flex items-start space-x-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ backgroundColor: "#43165c" }}
              >
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 
                  className="font-bold text-xl mb-4"
                  style={{ color: "#2b2352" }}
                >
                  Emergency Tips
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                    <span 
                      className="font-semibold"
                      style={{ color: "#43165c" }}
                    >
                      Share your exact location when calling
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                    <span 
                      className="font-semibold"
                      style={{ color: "#43165c" }}
                    >
                      Stay calm and speak clearly
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                    <span 
                      className="font-semibold"
                      style={{ color: "#43165c" }}
                    >
                      Don't hang up until told to do so
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom padding */}
        <div className="h-24" />
      </div>
    </div>
  );
}