import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, 
  Phone, 
  Ambulance, 
  Flame, 
  Shield, 
  MapPin,
  Clock,
  AlertTriangle,
  PhoneCall
} from "lucide-react";

interface EmergencyServicesProps {
  onBack: () => void;
}

export function EmergencyServices({ onBack }: EmergencyServicesProps) {
  const emergencyContacts = [
    {
      service: "Police",
      number: "911",
      description: "Law enforcement emergency",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      service: "Fire Department",
      number: "911",
      description: "Fire and rescue services",
      icon: Flame,
      color: "bg-red-100 text-red-600",
      bgColor: "bg-red-50"
    },
    {
      service: "Medical Emergency",
      number: "911",
      description: "Ambulance and medical help",
      icon: Ambulance,
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const nonEmergencyContacts = [
    {
      service: "City Services",
      number: "(555) 123-4567",
      description: "General city inquiries"
    },
    {
      service: "Utilities Emergency",
      number: "(555) 234-5678",
      description: "Power, water, gas emergencies"
    },
    {
      service: "Animal Control",
      number: "(555) 345-6789",
      description: "Animal-related issues"
    },
    {
      service: "Poison Control",
      number: "1-800-222-1222",
      description: "24/7 poison emergency help"
    }
  ];

  const handleEmergencyCall = (number: string) => {
    // In a real app, this would initiate a phone call
    window.open(`tel:${number}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="ml-4 font-medium">Emergency Services</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Emergency Alert */}
        <Card className="p-4 border-red-200 bg-red-50 shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-red-900">Life-Threatening Emergency?</h3>
              <p className="text-sm text-red-700 mt-1">
                Call 911 immediately for police, fire, or medical emergencies.
              </p>
            </div>
          </div>
        </Card>

        {/* Emergency Contacts */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Card 
                key={index}
                className={`p-4 border-0 shadow-sm ${contact.bgColor}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{contact.service}</h3>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{contact.number}</p>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white rounded-xl"
                    onClick={() => handleEmergencyCall(contact.number)}
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Non-Emergency Contacts */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Non-Emergency Contacts</h2>
          <Card className="divide-y border-0 shadow-sm bg-white">
            {nonEmergencyContacts.map((contact, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{contact.service}</h3>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                    <p className="text-sm font-medium text-blue-600 mt-1">{contact.number}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-xl"
                    onClick={() => handleEmergencyCall(contact.number)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Emergency Preparation */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Emergency Preparation</h2>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Know Your Location</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Be ready to provide your exact address or location details.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Stay Calm</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Speak clearly and follow the dispatcher's instructions.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="h-16 rounded-xl border-gray-200 flex flex-col space-y-1"
          >
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-sm">Share Location</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 rounded-xl border-gray-200 flex flex-col space-y-1"
          >
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-sm">Emergency Contacts</span>
          </Button>
        </div>
      </div>
    </div>
  );
}