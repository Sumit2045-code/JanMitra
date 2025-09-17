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
  MapPin,
  Clock,
  AlertTriangle,
  PhoneCall,
  Zap,
  Users,
  Car,
  Heart,
  Volume2,
  Share2
} from "lucide-react";

interface JanMitraEmergencyProps {
  onBack: () => void;
}

export function JanMitraEmergency({ onBack }: JanMitraEmergencyProps) {
  const [pulseActive, setPulseActive] = useState(false);

  const emergencyContacts = [
    {
      service: "Police Emergency",
      number: "100",
      description: "Crime, theft, violence",
      icon: Shield,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      darkBg: "dark:bg-blue-500/20"
    },
    {
      service: "Fire Department",
      number: "101",
      description: "Fire, rescue, accidents",
      icon: Flame,
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      darkBg: "dark:bg-red-500/20"
    },
    {
      service: "Medical Emergency",
      number: "108",
      description: "Health emergency, ambulance",
      icon: Ambulance,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      darkBg: "dark:bg-green-500/20"
    }
  ];

  const quickServices = [
    {
      title: "Women Helpline",
      number: "1091",
      icon: Heart,
      color: "text-pink-500"
    },
    {
      title: "Child Helpline",
      number: "1098",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Traffic Police",
      number: "103",
      icon: Car,
      color: "text-blue-500"
    },
    {
      title: "Disaster Management",
      number: "1070",
      icon: AlertTriangle,
      color: "text-orange-500"
    }
  ];

  const handleEmergencyCall = (number: string) => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
    // In a real app, this would initiate a phone call
    window.open(`tel:${number}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-pink-950/20">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glassmorphism sticky top-0 z-50 backdrop-blur-xl border-b border-red-200/50 dark:border-red-800/50"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-lg">Emergency Services</h1>
              <p className="text-sm text-muted-foreground">आपातकालीन सेवाएं</p>
            </div>
          </div>
          <motion.div
            animate={{ scale: pulseActive ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-red-500 text-white animate-pulse">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Emergency
            </Badge>
          </motion.div>
        </div>
      </motion.div>

      <div className="p-6 space-y-6">
        {/* SOS Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-center"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleEmergencyCall("112")}
            className="relative w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl group"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-red-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute inset-2 bg-red-300 rounded-full opacity-20"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <PhoneCall className="w-8 h-8 mb-1" />
              <span className="font-bold text-lg">SOS</span>
              <span className="text-xs">112</span>
            </div>
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Press for immediate emergency assistance
          </motion.p>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-semibold text-lg mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-red-500" />
            Emergency Numbers
          </h2>
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className={`overflow-hidden border-0 shadow-lg ${contact.bgColor} ${contact.darkBg} interactive-card`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <contact.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                            {contact.service}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {contact.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white">
                              {contact.number}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          onClick={() => handleEmergencyCall(contact.number)}
                          className={`bg-gradient-to-r ${contact.gradient} text-white shadow-lg hover:shadow-xl rounded-2xl px-6 py-3 ripple`}
                        >
                          <PhoneCall className="w-5 h-5 mr-2" />
                          Call Now
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-semibold text-lg mb-4 flex items-center">
            <Volume2 className="w-5 h-5 mr-2 text-blue-500" />
            Other Helplines
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEmergencyCall(service.number)}
              >
                <Card className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 interactive-card cursor-pointer">
                  <div className="text-center space-y-3">
                    <service.icon className={`w-8 h-8 mx-auto ${service.color}`} />
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        {service.number}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="p-6 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-orange-200 dark:border-orange-800">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  Emergency Tips
                </h3>
                <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Stay calm and provide your exact location</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Follow dispatcher's instructions carefully</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Phone className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Keep your phone charged and accessible</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="grid grid-cols-2 gap-4 pb-24"
        >
          <Button 
            variant="outline" 
            className="h-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 interactive-card"
          >
            <div className="flex flex-col items-center space-y-1">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">Share Location</span>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/30 interactive-card"
          >
            <div className="flex flex-col items-center space-y-1">
              <Share2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium">Emergency Contacts</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}