import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Bell, 
  Phone, 
  FileText, 
  ClipboardList, 
  Megaphone, 
  User, 
  Settings,
  AlertTriangle,
  Clock,
  CheckCircle,
  Calendar
} from "lucide-react";

interface DashboardProps {
  onNavigate: (screen: string) => void;
  userName: string;
}

export function Dashboard({ onNavigate, userName }: DashboardProps) {
  const mainServices = [
    {
      id: "emergency",
      title: "Emergency Services",
      description: "Quick access to emergency help",
      icon: Phone,
      color: "bg-red-100 text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "complaints",
      title: "File Complaint",
      description: "Report issues and concerns",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: "applications",
      title: "My Applications",
      description: "View and track your applications",
      icon: ClipboardList,
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "announcements",
      title: "Announcements",
      description: "Latest news and updates",
      icon: Megaphone,
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const quickStats = [
    { label: "Pending", count: 2, icon: Clock, color: "text-orange-600" },
    { label: "Completed", count: 8, icon: CheckCircle, color: "text-green-600" },
    { label: "Upcoming", count: 1, icon: Calendar, color: "text-blue-600" }
  ];

  const recentActivity = [
    {
      title: "Birth Certificate Application",
      status: "Processing",
      date: "2 days ago",
      type: "application"
    },
    {
      title: "Street Light Complaint",
      status: "Resolved",
      date: "1 week ago",
      type: "complaint"
    },
    {
      title: "Property Tax Payment",
      status: "Completed",
      date: "2 weeks ago",
      type: "payment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome, {userName}!
              </h1>
              <p className="text-gray-600 mt-1">How can we help you today?</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative p-2"
                onClick={() => onNavigate('notifications')}
              >
                <Bell className="w-6 h-6 text-gray-600" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => onNavigate('profile')}
              >
                <User className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-4">
            {quickStats.map((stat, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm bg-white">
                <div className="text-center">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-lg font-semibold text-gray-900">{stat.count}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Main Services */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            {mainServices.map((service) => (
              <Card 
                key={service.id}
                className={`p-4 border-0 shadow-sm cursor-pointer transition-all hover:shadow-md ${service.bgColor}`}
                onClick={() => onNavigate(service.id)}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{service.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-gray-900">Recent Activity</h2>
            <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
              View All
            </Button>
          </div>
          <Card className="divide-y border-0 shadow-sm bg-white">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{activity.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{activity.date}</p>
                  </div>
                  <Badge 
                    variant={activity.status === 'Completed' ? 'default' : 
                            activity.status === 'Resolved' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Emergency Notice */}
        <Card className="p-4 border-red-200 bg-red-50 shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-red-900 text-sm">Emergency Alert</h3>
              <p className="text-xs text-red-700 mt-1">
                For life-threatening emergencies, always call 911 first.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}