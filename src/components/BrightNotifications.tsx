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
  Settings,
  MoreVertical,
  Star,
  Award,
  Activity
} from "lucide-react";

interface BrightNotificationsProps {
  onBack: () => void;
}

export function BrightNotifications({ onBack }: BrightNotificationsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Application Approved",
      message: "Your birth certificate application has been approved and is ready for download.",
      time: "2 hours ago",
      icon: CheckCircle,
      bg: "#b4f8c8",
      textColor: "#2b2352",
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
      bg: "#a3e0ff",
      textColor: "#2b2352",
      isNew: true
    },
    {
      id: 3,
      type: "reminder",
      title: "Document Required",
      message: "Please submit additional documents for your license renewal application.",
      time: "1 day ago",
      icon: FileText,
      bg: "#ffe1ae",
      textColor: "#2b2352",
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
      bg: "#bca4ff",
      textColor: "#2b2352",
      isNew: false
    },
    {
      id: 5,
      type: "achievement",
      title: "Milestone Reached",
      message: "Congratulations! You've completed 5 applications this month.",
      time: "3 days ago",
      icon: Award,
      bg: "#fad2e1",
      textColor: "#2b2352",
      isNew: false
    }
  ];

  const getFilteredNotifications = () => {
    if (activeTab === "all") return notifications;
    if (activeTab === "updates") return notifications.filter(n => n.type === "success" || n.type === "update" || n.type === "reminder");
    if (activeTab === "city") return notifications.filter(n => n.type === "city" || n.type === "achievement");
    return notifications;
  };

  const unreadCount = notifications.filter(n => n.isNew).length;

  const stats = [
    {
      title: "Total",
      value: notifications.length.toString(),
      bg: "#a3e0ff",
      textColor: "#2b2352"
    },
    {
      title: "New",
      value: unreadCount.toString(),
      bg: "#b4f8c8",
      textColor: "#2b2352"
    },
    {
      title: "This Week",
      value: "4",
      bg: "#bca4ff",
      textColor: "#2b2352"
    }
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
                className="text-3xl font-bold flex items-center"
                style={{ color: "#2b2352" }}
              >
                Notifications
                {unreadCount > 0 && (
                  <Badge 
                    className="ml-4 px-3 py-1 rounded-full font-bold"
                    style={{ backgroundColor: "#fad2e1", color: "#2b2352" }}
                  >
                    {unreadCount} new
                  </Badge>
                )}
              </h1>
              <p 
                className="text-lg font-semibold"
                style={{ color: "#43165c" }}
              >
                Stay updated with your services
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-3 rounded-2xl shadow-lg"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
          >
            <Settings className="w-6 h-6" style={{ color: "#43165c" }} />
          </Button>
        </div>

        {/* Stats */}
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
                <Bell className="w-8 h-8 mx-auto text-white" />
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
          className="mb-8"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList 
              className="grid w-full grid-cols-3 p-2 rounded-3xl border-0 shadow-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <TabsTrigger 
                value="all" 
                className="rounded-2xl font-bold data-[state=active]:text-white"
                style={{
                  color: activeTab === "all" ? "white" : "#43165c",
                  background: activeTab === "all" ? "linear-gradient(135deg, #43165c 0%, #2b2352 100%)" : "transparent"
                }}
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="updates" 
                className="rounded-2xl font-bold data-[state=active]:text-white"
                style={{
                  color: activeTab === "updates" ? "white" : "#43165c",
                  background: activeTab === "updates" ? "linear-gradient(135deg, #43165c 0%, #2b2352 100%)" : "transparent"
                }}
              >
                Updates
              </TabsTrigger>
              <TabsTrigger 
                value="city" 
                className="rounded-2xl font-bold data-[state=active]:text-white"
                style={{
                  color: activeTab === "city" ? "white" : "#43165c",
                  background: activeTab === "city" ? "linear-gradient(135deg, #43165c 0%, #2b2352 100%)" : "transparent"
                }}
              >
                City News
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="space-y-6">
                {getFilteredNotifications().map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card 
                      className={`
                        border-0 overflow-hidden rounded-3xl shadow-xl
                        ${notification.isNew ? 'ring-4 ring-purple-300' : ''}
                      `}
                      style={{ backgroundColor: notification.bg }}
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0 shadow-lg">
                              <notification.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 
                                  className="font-bold text-xl truncate"
                                  style={{ color: notification.textColor }}
                                >
                                  {notification.title}
                                </h3>
                                {notification.isNew && (
                                  <Badge 
                                    className="text-white text-xs px-3 py-1 rounded-full font-bold"
                                    style={{ backgroundColor: "#43165c" }}
                                  >
                                    NEW
                                  </Badge>
                                )}
                              </div>
                              <p 
                                className="text-lg leading-relaxed mb-4 font-medium"
                                style={{ color: "#43165c" }}
                              >
                                {notification.message}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4" style={{ color: "#43165c" }} />
                                  <span 
                                    className="text-sm font-semibold"
                                    style={{ color: "#43165c" }}
                                  >
                                    {notification.time}
                                  </span>
                                </div>
                                {notification.actionLabel && (
                                  <Button 
                                    size="sm" 
                                    className="h-10 text-sm text-white rounded-2xl px-6 font-bold shadow-lg"
                                    style={{ 
                                      background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
                                    }}
                                  >
                                    {notification.actionLabel}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-2 opacity-50 hover:opacity-100 flex-shrink-0"
                          >
                            <MoreVertical className="w-5 h-5" style={{ color: "#43165c" }} />
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
          className="grid grid-cols-2 gap-6 mb-8"
        >
          <Button 
            variant="outline" 
            className="h-20 rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-2 font-bold"
            style={{ backgroundColor: "#b4f8c8" }}
          >
            <CheckCircle className="w-8 h-8 text-white" />
            <span className="text-lg" style={{ color: "#2b2352" }}>Mark All Read</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-20 rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-2 font-bold"
            style={{ backgroundColor: "#bca4ff" }}
          >
            <Settings className="w-8 h-8 text-white" />
            <span className="text-lg" style={{ color: "#2b2352" }}>Settings</span>
          </Button>
        </motion.div>

        {/* Bottom padding */}
        <div className="h-24" />
      </div>
    </div>
  );
}