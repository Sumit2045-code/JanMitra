import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { 
  Bell, 
  Phone, 
  FileText, 
  ClipboardList, 
  Megaphone, 
  Settings,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertTriangle,
  Calendar,
  Users,
  Activity
} from "lucide-react";

interface HealthDashboardProps {
  onNavigate: (screen: string) => void;
  userName: string;
}

export function HealthDashboard({ onNavigate, userName }: HealthDashboardProps) {
  const [currentTime] = useState(new Date());
  
  const stats = [
    {
      title: "Applications",
      value: "12",
      subtitle: "3 pending",
      icon: FileText,
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Complaints",
      value: "5",
      subtitle: "2 resolved",
      icon: ClipboardList,
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Services Used",
      value: "8",
      subtitle: "This month",
      icon: Activity,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  const services = [
    {
      id: "emergency",
      title: "Emergency",
      subtitle: "24/7 Support",
      icon: Phone,
      gradient: "from-red-100 to-pink-100",
      iconColor: "text-red-600"
    },
    {
      id: "complaints",
      title: "File Complaint",
      subtitle: "Report Issues",
      icon: ClipboardList,
      gradient: "from-orange-100 to-yellow-100",
      iconColor: "text-orange-600"
    },
    {
      id: "applications",
      title: "Applications",
      subtitle: "Certificates & Docs",
      icon: FileText,
      gradient: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      id: "announcements",
      title: "City News",
      subtitle: "Updates & Info",
      icon: Megaphone,
      gradient: "from-green-100 to-teal-100",
      iconColor: "text-green-600"
    }
  ];

  const recentActivity = [
    {
      title: "Birth Certificate",
      status: "Approved",
      time: "2 hours ago",
      type: "success"
    },
    {
      title: "Road Complaint",
      status: "In Progress",
      time: "1 day ago",
      type: "pending"
    },
    {
      title: "License Renewal",
      status: "Documents Required",
      time: "3 days ago",
      type: "action"
    }
  ];

  const formatGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-lg font-bold">
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-gray-500 font-medium">{formatDate()}</p>
              <h1 className="text-2xl font-bold text-gray-800">
                {formatGreeting()}, {userName.split(' ')[0]}!
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('notifications')}
              className="relative p-3 rounded-2xl bg-white/50 shadow-sm"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('profile')}
              className="p-3 rounded-2xl bg-white/50 shadow-sm"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className={`health-block p-4 bg-gradient-to-br ${stat.gradient} border-0`}>
                <div className="text-center space-y-2">
                  <stat.icon className={`w-6 h-6 mx-auto ${stat.iconColor}`} />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.title}</div>
                  <div className="text-xs text-gray-500">{stat.subtitle}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 space-y-6">
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Quick Services</h2>
            <Button variant="ghost" size="sm" className="text-purple-600">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(service.id)}
              >
                <Card className={`health-block p-6 bg-gradient-to-br ${service.gradient} border-0 soft-card`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.subtitle}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            <Button variant="ghost" size="sm" className="text-purple-600">
              View All
            </Button>
          </div>
          <Card className="health-block p-0 border-0 overflow-hidden">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className={`p-4 flex items-center justify-between ${
                  index !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    activity.type === 'success' ? 'bg-green-100' :
                    activity.type === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    {activity.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : activity.type === 'pending' ? (
                      <Clock className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.status}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </motion.div>
            ))}
          </Card>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card className="health-block p-6 border-0 bg-gradient-to-br from-indigo-100 to-purple-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Profile Completion</h3>
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Complete your profile to unlock all features</span>
                <span className="text-indigo-600 font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-white/50" />
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl"
                onClick={() => onNavigate('profile')}
              >
                Complete Profile
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Bottom padding for navigation */}
        <div className="h-24" />
      </div>
    </div>
  );
}