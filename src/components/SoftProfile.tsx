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
  Calendar,
  Shield,
  TrendingUp
} from "lucide-react";

interface SoftProfileProps {
  onBack: () => void;
  onLogout: () => void;
  userName: string;
}

export function SoftProfile({ onBack, onLogout, userName }: SoftProfileProps) {
  const [completionPercentage] = useState(75);
  
  const stats = [
    {
      title: "Applications",
      value: "12",
      subtitle: "Completed",
      icon: FileText,
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Complaints",
      value: "5",
      subtitle: "Filed",
      icon: ClipboardList,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      title: "Score",
      value: "850",
      subtitle: "Citizen Points",
      icon: Star,
      gradient: "from-yellow-100 to-orange-100",
      iconColor: "text-yellow-600"
    }
  ];

  const profileSections = [
    {
      title: "Personal Information",
      icon: User,
      items: [
        { label: "Full Name", value: userName, editable: true },
        { label: "Phone", value: "+91 98765 43210", editable: true },
        { label: "Email", value: "user@example.com", editable: true },
        { label: "Address", value: "123 Main Street, City", editable: true }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Edit Profile",
      icon: Edit3,
      gradient: "from-purple-100 to-indigo-100",
      action: () => console.log("Edit profile")
    },
    {
      title: "Settings",
      icon: Settings,
      gradient: "from-blue-100 to-cyan-100",
      action: () => console.log("Settings")
    },
    {
      title: "Help & Support",
      icon: HelpCircle,
      gradient: "from-green-100 to-emerald-100",
      action: () => console.log("Help")
    },
    {
      title: "Logout",
      icon: LogOut,
      gradient: "from-red-100 to-pink-100",
      action: onLogout
    }
  ];

  const achievements = [
    { title: "Early Adopter", desc: "Joined in first month", icon: Award, unlocked: true },
    { title: "Quick Solver", desc: "Fast application processing", icon: TrendingUp, unlocked: true },
    { title: "Helpful Citizen", desc: "Community contributor", icon: Star, unlocked: true },
    { title: "Digital Pioneer", desc: "Advanced user", icon: Shield, unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2 rounded-2xl bg-white/50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
              <p className="text-sm text-gray-600">Manage your account</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2 rounded-2xl bg-white/50">
            <Edit3 className="w-5 h-5 text-gray-600" />
          </Button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="health-block p-6 bg-gradient-to-br from-purple-100 to-indigo-100 border-0 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-2xl font-bold">
                  {userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{userName}</h2>
                <p className="text-gray-600 mb-2">Citizen ID: JM123456</p>
                <Badge className="bg-green-500 text-white px-3 py-1 rounded-full">
                  Verified Account
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Profile Completion</span>
                <span className="text-purple-600 font-medium">{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2 bg-white/50" />
              <p className="text-xs text-gray-600">
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
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className={`health-block p-4 bg-gradient-to-br ${stat.gradient} border-0`}>
                <div className="text-center space-y-2">
                  <stat.icon className={`w-5 h-5 mx-auto ${stat.iconColor}`} />
                  <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.title}</div>
                  <div className="text-xs text-gray-500">{stat.subtitle}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="px-6 space-y-6">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h2>
          <Card className="health-block p-0 border-0 overflow-hidden">
            {profileSections[0].items.map((item, index) => (
              <div
                key={item.label}
                className={`p-4 flex items-center justify-between ${
                  index !== profileSections[0].items.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                    {item.label === "Full Name" && <User className="w-5 h-5 text-purple-600" />}
                    {item.label === "Phone" && <Phone className="w-5 h-5 text-purple-600" />}
                    {item.label === "Email" && <Mail className="w-5 h-5 text-purple-600" />}
                    {item.label === "Address" && <MapPin className="w-5 h-5 text-purple-600" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.label}</h4>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                </div>
                {item.editable && (
                  <Button variant="ghost" size="sm" className="p-2">
                    <Edit3 className="w-4 h-4 text-gray-400" />
                  </Button>
                )}
              </div>
            ))}
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Card className={`health-block p-4 border-0 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <div className="text-center space-y-2">
                    <div className={`w-10 h-10 mx-auto rounded-2xl flex items-center justify-center ${
                      achievement.unlocked ? 'bg-white/50' : 'bg-gray-300/50'
                    }`}>
                      <achievement.icon className={`w-5 h-5 ${
                        achievement.unlocked ? 'text-yellow-600' : 'text-gray-500'
                      }`} />
                    </div>
                    <h4 className={`font-medium text-sm ${
                      achievement.unlocked ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-xs ${
                      achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {achievement.desc}
                    </p>
                    {achievement.unlocked && (
                      <Badge className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                        Unlocked
                      </Badge>
                    )}
                  </div>
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
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
              >
                <Card className={`health-block p-4 bg-gradient-to-br ${action.gradient} border-0 soft-card`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/50 rounded-2xl flex items-center justify-center">
                      <action.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-800 flex-1">{action.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
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