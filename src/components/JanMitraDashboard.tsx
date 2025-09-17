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
  User, 
  Settings,
  Moon,
  Sun,
  Star,
  Zap,
  Award,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Plus,
  Flame,
  Target,
  Gift,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";

interface JanMitraDashboardProps {
  onNavigate: (screen: string) => void;
  userName: string;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function JanMitraDashboard({ onNavigate, userName, isDark, toggleDarkMode }: JanMitraDashboardProps) {
  const [userXP] = useState(2450);
  const [userLevel] = useState(12);
  const [streakDays] = useState(7);

  const quickActions = [
    {
      id: "emergency",
      title: "Emergency",
      icon: Phone,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      size: "large"
    },
    {
      id: "complaints",
      title: "Complaints",
      icon: FileText,
      gradient: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      size: "medium"
    },
    {
      id: "applications",
      title: "Applications",
      icon: ClipboardList,
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      size: "medium"
    },
    {
      id: "announcements",
      title: "News",
      icon: Megaphone,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10",
      size: "medium"
    }
  ];

  const cityUpdates = [
    {
      id: 1,
      user: "City Municipality",
      avatar: "🏛️",
      content: "New metro line construction started! Expected completion by Dec 2024.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop",
      likes: 234,
      comments: 45,
      time: "2h ago",
      isLiked: false
    },
    {
      id: 2,
      user: "Traffic Police",
      avatar: "🚨",
      content: "Road closure on MG Road from 9 AM to 6 PM today for maintenance.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop",
      likes: 156,
      comments: 23,
      time: "4h ago",
      isLiked: true
    },
    {
      id: 3,
      user: "Parks Department",
      avatar: "🌳",
      content: "New eco-friendly park opened in Sector 21! Come visit with your family.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      likes: 342,
      comments: 67,
      time: "6h ago",
      isLiked: false
    }
  ];

  const achievements = [
    { icon: Star, title: "First Timer", color: "text-yellow-500" },
    { icon: Zap, title: "Quick Solver", color: "text-blue-500" },
    { icon: Heart, title: "Community Helper", color: "text-pink-500" },
    { icon: Award, title: "Top Contributor", color: "text-purple-500" }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#0f0f23]' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      {/* Header with Glassmorphism */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glassmorphism sticky top-0 z-50 backdrop-blur-xl border-b border-white/20"
      >
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12 ring-2 ring-[var(--janmitra-teal)] ring-offset-2">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-[var(--janmitra-blue)] to-[var(--janmitra-teal)] text-white font-semibold">
                  {userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-bold text-foreground">
                  Namaste, {userName}! 🙏
                </h1>
                <p className="text-sm text-muted-foreground">Aaj kya seva chahiye?</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="relative p-2 rounded-full"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2 rounded-full"
                onClick={() => onNavigate('notifications')}
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-[var(--janmitra-orange)] text-white text-xs flex items-center justify-center animate-pulse">
                  3
                </Badge>
              </Button>
            </div>
          </div>

          {/* User Stats Bar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[var(--janmitra-blue)] to-[var(--janmitra-teal)] rounded-2xl p-4 text-white"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Level {userLevel}</span>
                <Badge className="bg-white/20 text-white">
                  {userXP} XP
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-orange-300" />
                <span className="text-sm">{streakDays} day streak</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to Level {userLevel + 1}</span>
                <span>{userXP}/3000 XP</span>
              </div>
              <Progress value={(userXP / 3000) * 100} className="h-2 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="p-6 space-y-6">
        {/* Quick Actions - Instagram Stories Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-[var(--janmitra-orange)]" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(action.id)}
                className={`
                  ${action.size === 'large' ? 'col-span-2 h-24' : 'h-20'} 
                  relative overflow-hidden rounded-3xl cursor-pointer
                  bg-gradient-to-br ${action.gradient}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  interactive-card group
                `}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="relative h-full flex items-center justify-between p-6 text-white">
                  <div>
                    <h3 className="font-bold text-lg">{action.title}</h3>
                    <p className="text-white/80 text-sm">Tap to access</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <action.icon className="w-8 h-8 drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* City Social Wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-[var(--janmitra-teal)]" />
              What's happening in your city?
            </h2>
            <Button variant="ghost" size="sm" className="text-[var(--janmitra-blue)]">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {cityUpdates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 interactive-card">
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-2xl">{update.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{update.user}</h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{update.time}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm mb-3 leading-relaxed">{update.content}</p>
                    {update.image && (
                      <div className="rounded-xl overflow-hidden mb-3">
                        <img
                          src={update.image}
                          alt="City update"
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <div className="flex items-center space-x-4">
                        <button className={`flex items-center space-x-1 text-sm ${update.isLiked ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500 transition-colors`}>
                          <Heart className={`w-4 h-4 ${update.isLiked ? 'fill-current' : ''}`} />
                          <span>{update.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-[var(--janmitra-blue)] transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{update.comments}</span>
                        </button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[var(--janmitra-teal)]">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-[var(--janmitra-orange)]" />
            Your Achievements
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 interactive-card">
                  <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                  <h4 className="font-medium text-sm">{achievement.title}</h4>
                  <Badge className="mt-2 bg-[var(--janmitra-teal)]/20 text-[var(--janmitra-teal)]">
                    Unlocked
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 10 }}
          className="fixed bottom-20 right-6 z-40"
        >
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--janmitra-orange)] to-[var(--janmitra-teal)] text-white shadow-2xl hover:shadow-3xl animate-pulse-glow"
            onClick={() => onNavigate('quick-service')}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}