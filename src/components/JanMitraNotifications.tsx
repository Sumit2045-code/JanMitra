import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Bell, 
  Star, 
  Gift, 
  CheckCircle, 
  Clock,
  Zap,
  Award,
  Heart,
  TrendingUp,
  AlertTriangle,
  Info,
  Calendar,
  User,
  Settings,
  Filter,
  MoreVertical
} from "lucide-react";

interface JanMitraNotificationsProps {
  onBack: () => void;
}

export function JanMitraNotifications({ onBack }: JanMitraNotificationsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "reward",
      title: "Congratulations! 🎉",
      message: "You earned 50 XP for completing your birth certificate application!",
      time: "2 min ago",
      icon: Gift,
      color: "text-yellow-500",
      bgColor: "from-yellow-100 to-orange-100",
      darkBgColor: "dark:from-yellow-900/30 dark:to-orange-900/30",
      isNew: true,
      points: "+50 XP"
    },
    {
      id: 2,
      type: "update",
      title: "Application Status Update",
      message: "Your business license application has been approved and is ready for download.",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "from-green-100 to-emerald-100",
      darkBgColor: "dark:from-green-900/30 dark:to-emerald-900/30",
      isNew: true,
      actionLabel: "Download"
    },
    {
      id: 3,
      type: "achievement",
      title: "New Achievement Unlocked! 🏆",
      message: "Speed Demon - Complete 5 applications in a week",
      time: "3 hours ago",
      icon: Award,
      color: "text-purple-500",
      bgColor: "from-purple-100 to-pink-100",
      darkBgColor: "dark:from-purple-900/30 dark:to-pink-900/30",
      isNew: true,
      points: "+100 XP"
    },
    {
      id: 4,
      type: "city",
      title: "City Update",
      message: "New digital library opens in Sector 15. Free WiFi and computer access available.",
      time: "5 hours ago",
      icon: Info,
      color: "text-blue-500",
      bgColor: "from-blue-100 to-cyan-100",
      darkBgColor: "dark:from-blue-900/30 dark:to-cyan-900/30",
      isNew: false
    },
    {
      id: 5,
      type: "reminder",
      title: "Document Reminder",
      message: "Your vehicle registration expires in 15 days. Renew now to avoid penalties.",
      time: "1 day ago",
      icon: Clock,
      color: "text-orange-500",
      bgColor: "from-orange-100 to-red-100",
      darkBgColor: "dark:from-orange-900/30 dark:to-red-900/30",
      isNew: false,
      actionLabel: "Renew Now"
    },
    {
      id: 6,
      type: "social",
      title: "Community Milestone! 🌟",
      message: "Our city reached 10,000 digital service users. Thanks for being part of the change!",
      time: "2 days ago",
      icon: Heart,
      color: "text-pink-500",
      bgColor: "from-pink-100 to-rose-100",
      darkBgColor: "dark:from-pink-900/30 dark:to-rose-900/30",
      isNew: false,
      points: "+25 XP"
    }
  ];

  const getFilteredNotifications = () => {
    if (activeTab === "all") return notifications;
    if (activeTab === "rewards") return notifications.filter(n => n.type === "reward" || n.type === "achievement");
    if (activeTab === "updates") return notifications.filter(n => n.type === "update" || n.type === "city" || n.type === "reminder");
    return notifications;
  };

  const unreadCount = notifications.filter(n => n.isNew).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glassmorphism sticky top-0 z-50 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-800/50"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-lg flex items-center">
                <Bell className="w-5 h-5 mr-2 text-purple-500" />
                Notifications
                {unreadCount > 0 && (
                  <Badge className="ml-2 bg-red-500 text-white">
                    {unreadCount} new
                  </Badge>
                )}
              </h1>
              <p className="text-sm text-muted-foreground">सूचनाएं और अपडेट</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4"
        >
          <Card className="p-4 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-0 shadow-lg">
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto text-yellow-500 mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">2,450</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Total XP</div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-0 shadow-lg">
            <div className="text-center">
              <Award className="w-6 h-6 mx-auto text-purple-500 mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">12</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Achievements</div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-0 shadow-lg">
            <div className="text-center">
              <TrendingUp className="w-6 h-6 mx-auto text-blue-500 mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">Level 12</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Current</div>
            </div>
          </Card>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl">
              <TabsTrigger value="all" className="rounded-xl">All</TabsTrigger>
              <TabsTrigger value="rewards" className="rounded-xl">Rewards</TabsTrigger>
              <TabsTrigger value="updates" className="rounded-xl">Updates</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {getFilteredNotifications().map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className={`
                      overflow-hidden border-0 shadow-lg interactive-card
                      ${notification.isNew ? 'ring-2 ring-purple-400 dark:ring-purple-600' : ''}
                      bg-gradient-to-r ${notification.bgColor} ${notification.darkBgColor}
                    `}>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start space-x-3">
                            <motion.div
                              animate={{ 
                                scale: notification.isNew ? [1, 1.1, 1] : 1,
                                rotate: notification.type === "achievement" ? [0, 10, -10, 0] : 0
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: notification.isNew ? Infinity : 0,
                                ease: "easeInOut" 
                              }}
                              className={`w-12 h-12 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg`}
                            >
                              <notification.icon className={`w-6 h-6 ${notification.color}`} />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                  {notification.title}
                                </h3>
                                {notification.isNew && (
                                  <Badge className="bg-purple-500 text-white text-xs animate-pulse">
                                    NEW
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {notification.message}
                              </p>
                              <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {notification.time}
                                </span>
                                <div className="flex items-center space-x-2">
                                  {notification.points && (
                                    <Badge className="bg-yellow-500 text-white text-xs">
                                      {notification.points}
                                    </Badge>
                                  )}
                                  {notification.actionLabel && (
                                    <Button size="sm" className="h-7 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">
                                      {notification.actionLabel}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="opacity-50 hover:opacity-100">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Achievement Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-indigo-500" />
                Next Achievement
              </h3>
              <Badge className="bg-indigo-500 text-white">
                Close!
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">Community Champion</span>
                <span className="text-gray-500 dark:text-gray-400">7/10 actions</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Complete 3 more community actions to unlock this achievement and earn 200 XP!
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Padding for Navigation */}
        <div className="h-24" />
      </div>
    </div>
  );
}