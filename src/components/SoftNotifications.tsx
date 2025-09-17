import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Bell, 
  CheckCircle, 
  Clock,
  FileText,
  AlertTriangle,
  Calendar,
  Settings,
  MoreVertical,
  Star,
  Award,
  Activity
} from "lucide-react";

interface SoftNotificationsProps {
  onBack: () => void;
}

export function SoftNotifications({ onBack }: SoftNotificationsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Application Approved",
      message: "Your birth certificate application has been approved and is ready for download.",
      time: "2 hours ago",
      icon: CheckCircle,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      isNew: true,
      actionLabel: "Download"
    },
    {
      id: 2,
      type: "update",
      title: "Status Update",
      message: "Your complaint about street lighting has been forwarded to the maintenance department.",
      time: "4 hours ago",
      icon: Activity,
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      isNew: true
    },
    {
      id: 3,
      type: "reminder",
      title: "Document Required",
      message: "Please submit additional documents for your license renewal application.",
      time: "1 day ago",
      icon: FileText,
      gradient: "from-orange-100 to-yellow-100",
      iconColor: "text-orange-600",
      isNew: false,
      actionLabel: "Upload"
    },
    {
      id: 4,
      type: "city",
      title: "City Update",
      message: "New digital library facility opened in Sector 21. Free access for all citizens.",
      time: "2 days ago",
      icon: Star,
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
      isNew: false
    },
    {
      id: 5,
      type: "achievement",
      title: "Milestone Reached",
      message: "Congratulations! You've completed 5 applications this month.",
      time: "3 days ago",
      icon: Award,
      gradient: "from-indigo-100 to-purple-100",
      iconColor: "text-indigo-600",
      isNew: false
    },
    {
      id: 6,
      type: "alert",
      title: "Service Maintenance",
      message: "Online payment services will be temporarily unavailable tomorrow from 2-4 AM.",
      time: "1 week ago",
      icon: AlertTriangle,
      gradient: "from-red-100 to-pink-100",
      iconColor: "text-red-600",
      isNew: false
    }
  ];

  const getFilteredNotifications = () => {
    if (activeTab === "all") return notifications;
    if (activeTab === "updates") return notifications.filter(n => n.type === "success" || n.type === "update" || n.type === "reminder");
    if (activeTab === "city") return notifications.filter(n => n.type === "city" || n.type === "alert");
    return notifications;
  };

  const unreadCount = notifications.filter(n => n.isNew).length;

  const stats = [
    {
      title: "Total",
      value: notifications.length.toString(),
      gradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      title: "New",
      value: unreadCount.toString(),
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      title: "This Week",
      value: "4",
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2 rounded-2xl bg-white/50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                Notifications
                {unreadCount > 0 && (
                  <Badge className="ml-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    {unreadCount} new
                  </Badge>
                )}
              </h1>
              <p className="text-sm text-gray-600">Stay updated with your services</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2 rounded-2xl bg-white/50">
              <Settings className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Stats */}
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
                  <Bell className={`w-5 h-5 mx-auto ${stat.iconColor}`} />
                  <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.title}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 health-block p-1 bg-white/80 border-0">
              <TabsTrigger 
                value="all" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="updates" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
              >
                Updates
              </TabsTrigger>
              <TabsTrigger 
                value="city" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
              >
                City News
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {getFilteredNotifications().map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card className={`
                      health-block border-0 overflow-hidden
                      bg-gradient-to-r ${notification.gradient}
                      ${notification.isNew ? 'ring-2 ring-purple-300' : ''}
                    `}>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className={`w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0`}>
                              <notification.icon className={`w-6 h-6 ${notification.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-bold text-gray-800 truncate">
                                  {notification.title}
                                </h3>
                                {notification.isNew && (
                                  <Badge className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                {notification.message}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3 text-gray-400" />
                                  <span className="text-xs text-gray-500">
                                    {notification.time}
                                  </span>
                                </div>
                                {notification.actionLabel && (
                                  <Button 
                                    size="sm" 
                                    className="h-7 text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl px-3"
                                  >
                                    {notification.actionLabel}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="p-1 opacity-50 hover:opacity-100 flex-shrink-0">
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

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <Button 
            variant="outline" 
            className="h-16 rounded-2xl health-block bg-white/80 border-0 hover:bg-white/90 flex flex-col items-center space-y-1"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Mark All Read</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 rounded-2xl health-block bg-white/80 border-0 hover:bg-white/90 flex flex-col items-center space-y-1"
          >
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Settings</span>
          </Button>
        </motion.div>

        {/* Bottom padding */}
        <div className="h-24" />
      </div>
    </div>
  );
}