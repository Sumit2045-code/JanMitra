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

interface SoftEmergencyProps {
  onBack: () => void;
}

export function SoftEmergency({ onBack }: SoftEmergencyProps) {
  const [activeCall, setActiveCall] = useState<string | null>(null);

  const emergencyContacts = [
    {
      service: "Police",
      number: "100",
      description: "Crime & Safety",
      icon: Shield,
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      service: "Fire Department",
      number: "101",
      description: "Fire & Rescue",
      icon: Flame,
      gradient: "from-red-100 to-pink-100",
      iconColor: "text-red-600"
    },
    {
      service: "Medical Emergency",
      number: "108",
      description: "Health Emergency",
      icon: Ambulance,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  const quickServices = [
    {
      title: "Women Helpline",
      number: "1091",
      icon: Heart,
      gradient: "from-pink-100 to-rose-100"
    },
    {
      title: "Child Helpline",
      number: "1098",
      icon: Users,
      gradient: "from-purple-100 to-indigo-100"
    },
    {
      title: "Traffic Police",
      number: "103",
      icon: Car,
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Disaster Help",
      number: "1070",
      icon: AlertTriangle,
      gradient: "from-orange-100 to-yellow-100"
    }
  ];

  const handleEmergencyCall = (number: string) => {
    setActiveCall(number);
    setTimeout(() => setActiveCall(null), 3000);
    window.open(`tel:${number}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2 rounded-2xl bg-white/50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Emergency</h1>
              <p className="text-sm text-gray-600">Quick access to help</p>
            </div>
          </div>
          <Badge className="bg-red-500 text-white px-3 py-1 rounded-full">
            24/7 Available
          </Badge>
        </div>

        {/* SOS Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-center mb-8"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleEmergencyCall("112")}
            className="relative w-36 h-36 mx-auto health-block bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-xl"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-red-400 rounded-full"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <PhoneCall className="w-10 h-10 mb-2" />
              <span className="text-xl font-bold">SOS</span>
              <span className="text-sm">Emergency</span>
            </div>
          </motion.button>
          <p className="mt-4 text-sm text-gray-600">
            Tap for immediate assistance (112)
          </p>
        </motion.div>
      </div>

      <div className="px-6 space-y-6">
        {/* Emergency Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4">Emergency Services</h2>
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className={`health-block p-6 bg-gradient-to-br ${contact.gradient} border-0`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center`}>
                        <contact.icon className={`w-7 h-7 ${contact.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {contact.service}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {contact.description}
                        </p>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="font-bold text-gray-700">
                            {contact.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleEmergencyCall(contact.number)}
                      className={`${contact.iconColor.replace('text-', 'bg-').replace('600', '500')} text-white rounded-2xl px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                      disabled={activeCall === contact.number}
                    >
                      {activeCall === contact.number ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Calling...
                        </>
                      ) : (
                        <>
                          <PhoneCall className="w-4 h-4 mr-2" />
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
          <h2 className="text-lg font-bold text-gray-800 mb-4">Other Helplines</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEmergencyCall(service.number)}
              >
                <Card className={`health-block p-4 bg-gradient-to-br ${service.gradient} border-0 soft-card`}>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-white/50 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg font-bold text-gray-700 mt-1">
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
          <Card className="health-block p-6 bg-gradient-to-br from-blue-100 to-indigo-100 border-0">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-3">Emergency Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Share your exact location when calling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Stay calm and speak clearly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Phone className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Don't hang up until told to do so</span>
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