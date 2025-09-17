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
  Activity,
  Star,
  Award,
  Zap
} from "lucide-react";

interface BrightDashboardProps {
  onNavigate: (screen: string) => void;
  userName: string;
}

export function BrightDashboard({ onNavigate, userName }: BrightDashboardProps) {
  const [currentTime] = useState(new Date());
  
  const stats = [
    {
      title: "Applications",
      value: "12",
      subtitle: "3 pending",
      icon: FileText,
      bg: "#bca4ff",
      textColor: "#2b2352"
    },
    {
      title: "Complaints",
      value: "5", 
      subtitle: "2 resolved",
      icon: ClipboardList,
      bg: "#a3e0ff",
      textColor: "#2b2352"
    },
    {
      title: "Services Used",
      value: "8",
      subtitle: "This month",
      icon: Activity,
      bg: "#b4f8c8",
      textColor: "#2b2352"
    }
  ];

  const services = [
    {
      id: "emergency",
      title: "Emergency",
      subtitle: "24/7 Support",
      icon: Phone,
      bg: "#fad2e1",
      textColor: "#2b2352"
    },
    {
      id: "complaints",
      title: "File Complaint",
      subtitle: "Report Issues",
      icon: ClipboardList,
      bg: "#ffe1ae",
      textColor: "#2b2352"
    },
    {
      id: "applications",
      title: "Applications",
      subtitle: "Certificates & Docs",
      icon: FileText,
      bg: "#a3e0ff",
      textColor: "#2b2352"
    },
    {
      id: "announcements",
      title: "City News",
      subtitle: "Updates & Info",
      icon: Megaphone,
      bg: "#b4f8c8",
      textColor: "#2b2352"
    }
  ];

  const recentActivity = [
    {
      title: "Birth Certificate",
      status: "Approved",
      time: "2 hours ago",
      type: "success",
      bg: "#b4f8c8"
    },
    {
      title: "Road Complaint",
      status: "In Progress",
      time: "1 day ago",
      type: "pending",
      bg: "#ffe1ae"
    },
    {
      title: "License Renewal",
      status: "Documents Required",
      time: "3 days ago",
      type: "action",
      bg: "#fad2e1"
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
    <div 
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f0efff 0%, #ffe8f0 100%)"
      }}
    >
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 border-4 border-white shadow-xl">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback 
                className="text-white text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)" }}
              >
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p 
                className="text-sm font-semibold mb-1"
                style={{ color: "#43165c" }}
              >
                {formatDate()}
              </p>
              <h1 
                className="text-3xl font-bold"
                style={{ color: "#2b2352" }}
              >
                {formatGreeting()}, {userName.split(' ')[0]}!
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('notifications')}
              className="relative p-4 rounded-2xl shadow-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <Bell className="w-6 h-6" style={{ color: "#43165c" }} />
              <Badge 
                className="absolute -top-1 -right-1 h-6 w-6 p-0 text-white text-xs flex items-center justify-center"
                style={{ backgroundColor: "#fad2e1", color: "#2b2352" }}
              >
                3
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('profile')}
              className="p-4 rounded-2xl shadow-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <Settings className="w-6 h-6" style={{ color: "#43165c" }} />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card 
                className="p-6 text-center space-y-3 rounded-3xl border-0 shadow-xl"
                style={{ backgroundColor: stat.bg }}
              >
                <stat.icon 
                  className="w-8 h-8 mx-auto text-white" 
                />
                <div 
                  className="text-3xl font-bold"
                  style={{ color: stat.textColor }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm font-bold"
                  style={{ color: stat.textColor }}
                >
                  {stat.title}
                </div>
                <div 
                  className="text-xs font-semibold opacity-80"
                  style={{ color: stat.textColor }}
                >
                  {stat.subtitle}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 space-y-8">
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-2xl font-bold"
              style={{ color: "#2b2352" }}
            >
              Quick Services
            </h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-semibold"
              style={{ color: "#43165c" }}
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(service.id)}
              >
                <Card 
                  className="p-8 rounded-3xl border-0 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{ backgroundColor: service.bg }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <ChevronRight 
                      className="w-6 h-6"
                      style={{ color: service.textColor }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-bold text-xl mb-2"
                      style={{ color: service.textColor }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="font-semibold"
                      style={{ color: service.textColor, opacity: 0.8 }}
                    >
                      {service.subtitle}
                    </p>
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
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-2xl font-bold"
              style={{ color: "#2b2352" }}
            >
              Recent Activity
            </h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-semibold"
              style={{ color: "#43165c" }}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Card 
                  className="p-6 rounded-2xl border-0 shadow-lg"
                  style={{ backgroundColor: activity.bg }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center">
                        {activity.type === 'success' ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : activity.type === 'pending' ? (
                          <Clock className="w-6 h-6 text-white" />
                        ) : (
                          <AlertTriangle className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 
                          className="font-bold text-lg"
                          style={{ color: "#2b2352" }}
                        >
                          {activity.title}
                        </h4>
                        <p 
                          className="font-semibold"
                          style={{ color: "#43165c" }}
                        >
                          {activity.status}
                        </p>
                      </div>
                    </div>
                    <div 
                      className="text-sm font-semibold"
                      style={{ color: "#43165c" }}
                    >
                      {activity.time}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card 
            className="p-8 rounded-3xl border-0 shadow-xl"
            style={{ backgroundColor: "#bca4ff" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 
                className="font-bold text-xl"
                style={{ color: "#2b2352" }}
              >
                Profile Completion
              </h3>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span 
                  className="font-semibold"
                  style={{ color: "#43165c" }}
                >
                  Complete your profile to unlock all features
                </span>
                <span 
                  className="font-bold"
                  style={{ color: "#2b2352" }}
                >
                  75%
                </span>
              </div>
              <Progress value={75} className="h-3 bg-white/50" />
              <Button 
                size="lg" 
                className="w-full text-white rounded-2xl font-bold text-lg shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
                }}
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