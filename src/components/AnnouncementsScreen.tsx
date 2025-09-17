import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, 
  Bell, 
  Calendar, 
  MapPin, 
  Clock,
  AlertTriangle,
  Info,
  CheckCircle,
  ExternalLink
} from "lucide-react";

interface AnnouncementsScreenProps {
  onBack: () => void;
}

export function AnnouncementsScreen({ onBack }: AnnouncementsScreenProps) {
  const announcements = [
    {
      id: 1,
      type: "urgent",
      title: "Water Service Maintenance",
      description: "Scheduled water service interruption in downtown area from 8 AM to 4 PM on January 20th.",
      date: "2024-01-18",
      location: "Downtown Area",
      category: "Utilities",
      isNew: true,
      link: "https://example.com/water-maintenance"
    },
    {
      id: 2,
      type: "info",
      title: "New Online Tax Payment System",
      description: "We've launched a new online portal for property tax payments. Register now for convenient 24/7 access.",
      date: "2024-01-16",
      location: "Citywide",
      category: "Digital Services",
      isNew: true,
      link: "https://example.com/tax-portal"
    },
    {
      id: 3,
      type: "event",
      title: "Community Town Hall Meeting",
      description: "Join us for the monthly town hall meeting to discuss community issues and upcoming projects.",
      date: "2024-01-25",
      time: "7:00 PM",
      location: "City Hall Auditorium",
      category: "Community",
      isNew: false,
      eventDate: "2024-01-25"
    },
    {
      id: 4,
      type: "success",
      title: "Street Repairs Completed",
      description: "Road construction on Main Street has been completed ahead of schedule. Traffic flow has been restored.",
      date: "2024-01-14",
      location: "Main Street",
      category: "Infrastructure",
      isNew: false
    },
    {
      id: 5,
      type: "info",
      title: "New Business License Requirements",
      description: "Updated regulations for business licenses are now in effect. Please review the new requirements.",
      date: "2024-01-12",
      location: "Citywide",
      category: "Business",
      isNew: false,
      link: "https://example.com/business-requirements"
    },
    {
      id: 6,
      type: "event",
      title: "Public Library Extended Hours",
      description: "The central library will now be open until 9 PM on weekdays to better serve our community.",
      date: "2024-01-10",
      location: "Central Library",
      category: "Public Services",
      isNew: false
    }
  ];

  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "event":
        return <Calendar className="w-5 h-5 text-purple-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-50 border-red-200";
      case "success":
        return "bg-green-50 border-green-200";
      case "event":
        return "bg-purple-50 border-purple-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Utilities": "bg-orange-100 text-orange-800",
      "Digital Services": "bg-blue-100 text-blue-800",
      "Community": "bg-purple-100 text-purple-800",
      "Infrastructure": "bg-green-100 text-green-800",
      "Business": "bg-indigo-100 text-indigo-800",
      "Public Services": "bg-teal-100 text-teal-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const urgentAnnouncements = announcements.filter(a => a.type === "urgent");
  const otherAnnouncements = announcements.filter(a => a.type !== "urgent");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="ml-4 font-medium">Announcements</h1>
        </div>
        <Button variant="ghost" size="sm">
          <Bell className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-red-600">1</div>
              <div className="text-xs text-gray-600">Urgent</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">2</div>
              <div className="text-xs text-gray-600">New</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">6</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
          </Card>
        </div>

        {/* Urgent Announcements */}
        {urgentAnnouncements.length > 0 && (
          <div>
            <h2 className="font-medium text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              Urgent Announcements
            </h2>
            <div className="space-y-3">
              {urgentAnnouncements.map((announcement) => (
                <Card 
                  key={announcement.id} 
                  className={`p-4 border shadow-sm ${getAnnouncementColor(announcement.type)}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        {getAnnouncementIcon(announcement.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                            {announcement.isNew && (
                              <Badge className="bg-red-600 text-white text-xs">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{announcement.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{announcement.date}</span>
                            </div>
                            {announcement.location && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{announcement.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <Badge className={`text-xs ${getCategoryColor(announcement.category)}`}>
                        {announcement.category}
                      </Badge>
                    </div>
                    {announcement.link && (
                      <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
                        Learn More <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other Announcements */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Recent Updates</h2>
          <div className="space-y-3">
            {otherAnnouncements.map((announcement) => (
              <Card 
                key={announcement.id} 
                className="p-4 border-0 shadow-sm bg-white"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {getAnnouncementIcon(announcement.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                          {announcement.isNew && (
                            <Badge className="bg-blue-600 text-white text-xs">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{announcement.date}</span>
                          </div>
                          {announcement.time && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{announcement.time}</span>
                            </div>
                          )}
                          {announcement.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{announcement.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge className={`text-xs ${getCategoryColor(announcement.category)}`}>
                      {announcement.category}
                    </Badge>
                  </div>
                  {announcement.link && (
                    <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
                      Learn More <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <Card className="p-4 border-blue-200 bg-blue-50 shadow-sm">
          <div className="flex items-start space-x-3">
            <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-blue-900">Stay Updated</h3>
              <p className="text-sm text-blue-700 mt-1">
                Enable notifications to receive important announcements instantly.
              </p>
              <Button variant="link" className="p-0 h-auto text-sm text-blue-600 mt-2">
                Manage Notifications →
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}