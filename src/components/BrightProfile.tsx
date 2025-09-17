import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  User, 
  Edit3, 
  FileText, 
  ClipboardList, 
  Award,
  Star,
  Activity,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  TrendingUp
} from "lucide-react";

interface BrightProfileProps {
  onBack: () => void;
  onLogout: () => void;
  userName: string;
}

export function BrightProfile({ onBack, onLogout, userName }: BrightProfileProps) {
  const [completionPercentage] = useState(75);
  
  const stats = [
    {
      title: "Applications",
      value: "12",
      subtitle: "Completed",
      icon: FileText,
      bg: "#a3e0ff",
      textColor: "#2b2352"
    },
    {
      title: "Complaints",
      value: "5",
      subtitle: "Filed",
      icon: ClipboardList,
      bg: "#b4f8c8",
      textColor: "#2b2352"
    },
    {
      title: "Score",
      value: "850",
      subtitle: "Citizen Points",
      icon: Star,
      bg: "#ffe1ae",
      textColor: "#2b2352"
    }
  ];

  const profileSections = [
    {
      title: "Personal Information",
      icon: User,
      items: [
        { label: "Full Name", value: userName, editable: true, icon: User },
        { label: "Phone", value: "+91 98765 43210", editable: true, icon: Phone },
        { label: "Email", value: "user@example.com", editable: true, icon: Mail },
        { label: "Address", value: "123 Main Street, City", editable: true, icon: MapPin }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Edit Profile",
      icon: Edit3,
      bg: "#bca4ff"
    },
    {
      title: "Settings",
      icon: Settings,
      bg: "#a3e0ff"
    },
    {
      title: "Help & Support",
      icon: HelpCircle,
      bg: "#b4f8c8"
    },
    {
      title: "Logout",
      icon: LogOut,
      bg: "#fad2e1",
      action: onLogout
    }
  ];

  const achievements = [
    { title: "Early Adopter", desc: "Joined in first month", icon: Award, unlocked: true, bg: "#ffe1ae" },
    { title: "Quick Solver", desc: "Fast application processing", icon: TrendingUp, unlocked: true, bg: "#b4f8c8" },
    { title: "Helpful Citizen", desc: "Community contributor", icon: Star, unlocked: true, bg: "#bca4ff" },
    { title: "Digital Pioneer", desc: "Advanced user", icon: Shield, unlocked: false, bg: "#e5e7eb" }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f0efff 0%, #e8f4fd 100%)"
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
                Profile
              </h1>
              <p 
                className="text-lg font-semibold"
                style={{ color: "#43165c" }}
              >
                Manage your account
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-3 rounded-2xl shadow-lg"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
          >
            <Edit3 className="w-6 h-6" style={{ color: "#43165c" }} />
          </Button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card 
            className="p-8 rounded-3xl border-0 shadow-xl mb-8"
            style={{ backgroundColor: "#bca4ff" }}
          >
            <div className="flex items-center space-x-6 mb-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback 
                  className="text-white text-3xl font-bold"
                  style={{ background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)" }}
                >
                  {userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#2b2352" }}
                >
                  {userName}
                </h2>
                <p 
                  className="font-semibold text-lg mb-3"
                  style={{ color: "#43165c" }}
                >
                  Citizen ID: JM123456
                </p>
                <Badge 
                  className="text-white px-4 py-2 rounded-full font-bold"
                  style={{ backgroundColor: "#43165c" }}
                >
                  Verified Account
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span 
                  className="font-semibold"
                  style={{ color: "#43165c" }}
                >
                  Profile Completion
                </span>
                <span 
                  className="font-bold"
                  style={{ color: "#2b2352" }}
                >
                  {completionPercentage}%
                </span>
              </div>
              <Progress value={completionPercentage} className="h-3 bg-white/50" />
              <p 
                className="text-sm font-medium"
                style={{ color: "#43165c" }}
              >
                Complete your profile to unlock all features
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card 
                className="p-6 text-center space-y-3 rounded-3xl border-0 shadow-xl"
                style={{ backgroundColor: stat.bg }}
              >
                <stat.icon className="w-8 h-8 mx-auto text-white" />
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
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: "#2b2352" }}
          >
            Personal Information
          </h2>
          <div className="space-y-4">
            {profileSections[0].items.map((item, index) => (
              <Card 
                key={item.label}
                className="p-6 rounded-2xl border-0 shadow-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "#bca4ff" }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 
                        className="font-bold text-lg"
                        style={{ color: "#2b2352" }}
                      >
                        {item.label}
                      </h4>
                      <p 
                        className="font-semibold"
                        style={{ color: "#43165c" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {item.editable && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-3 rounded-2xl"
                      style={{ backgroundColor: "#f3f4f6" }}
                    >
                      <Edit3 className="w-5 h-5" style={{ color: "#43165c" }} />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: "#2b2352" }}
          >
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Card 
                  className="p-6 text-center space-y-3 rounded-3xl border-0 shadow-xl"
                  style={{ backgroundColor: achievement.bg }}
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-white/50 flex items-center justify-center">
                    <achievement.icon 
                      className={`w-6 h-6 ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`} 
                    />
                  </div>
                  <h4 
                    className={`font-bold text-lg ${achievement.unlocked ? '' : 'opacity-50'}`}
                    style={{ color: achievement.unlocked ? "#2b2352" : "#6b7280" }}
                  >
                    {achievement.title}
                  </h4>
                  <p 
                    className={`text-sm font-medium ${achievement.unlocked ? '' : 'opacity-50'}`}
                    style={{ color: achievement.unlocked ? "#43165c" : "#9ca3af" }}
                  >
                    {achievement.desc}
                  </p>
                  {achievement.unlocked && (
                    <Badge 
                      className="text-white text-xs px-3 py-1 rounded-full font-bold"
                      style={{ backgroundColor: "#43165c" }}
                    >
                      Unlocked
                    </Badge>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: "#2b2352" }}
          >
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
              >
                <Card 
                  className="p-6 rounded-3xl border-0 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{ backgroundColor: action.bg }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/50 rounded-2xl flex items-center justify-center">
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span 
                      className="font-bold text-lg flex-1"
                      style={{ color: "#2b2352" }}
                    >
                      {action.title}
                    </span>
                    <ChevronRight className="w-5 h-5" style={{ color: "#43165c" }} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom padding */}
        <div className="h-24" />
      </div>
    </div>
  );
}