import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  ArrowLeft, 
  User, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  Edit3,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronRight
} from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
  userName: string;
}

export function ProfileScreen({ onBack, onLogout, userName }: ProfileScreenProps) {
  const userInfo = {
    name: userName,
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    memberSince: "January 2024",
    verificationStatus: "Verified"
  };

  const menuItems = [
    {
      icon: Edit3,
      title: "Edit Profile",
      description: "Update your personal information",
      action: "edit-profile"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage notification preferences",
      action: "notifications"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Manage your account security",
      action: "security"
    },
    {
      icon: Settings,
      title: "App Settings",
      description: "Customize app preferences",
      action: "settings"
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help and contact support",
      action: "help"
    }
  ];

  const stats = [
    { label: "Applications", count: 12 },
    { label: "Complaints", count: 3 },
    { label: "Resolved", count: 8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="ml-4 font-medium">Profile</h1>
        </div>
        <Button variant="ghost" size="sm">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-gray-900">{userInfo.name}</h2>
                <Badge className="bg-green-100 text-green-800 text-xs">
                  {userInfo.verificationStatus}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mt-1">Member since {userInfo.memberSince}</p>
            </div>
            <Button variant="ghost" size="sm">
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 border-0 shadow-sm bg-white">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{stat.count}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{userInfo.email}</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">{userInfo.phone}</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium text-gray-900">{userInfo.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="divide-y border-0 shadow-sm bg-white">
          {menuItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </Card>

        {/* Logout */}
        <Card className="p-4 border-0 shadow-sm bg-white">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={onLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </Card>

        {/* App Info */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>CitizenConnect v1.0.0</p>
          <div className="flex justify-center space-x-4">
            <Button variant="link" className="p-0 h-auto text-xs">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-xs">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}