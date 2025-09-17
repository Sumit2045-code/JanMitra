import { motion } from "motion/react";
import { 
  Home, 
  FileText, 
  Bell, 
  User, 
  Phone
} from "lucide-react";

interface BrightBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BrightBottomNav({ activeTab, onTabChange }: BrightBottomNavProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: Home
    },
    {
      id: 'applications',
      label: 'Services',
      icon: FileText
    },
    {
      id: 'emergency',
      label: 'Emergency',
      icon: Phone
    },
    {
      id: 'notifications',
      label: 'Updates',
      icon: Bell
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User
    }
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
    >
      <div 
        className="rounded-3xl p-3 shadow-2xl border-0"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="relative flex flex-col items-center justify-center p-4 w-20 h-20 rounded-3xl transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {/* Active Background with gradient glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-3xl shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15
                  }}
                  className="relative z-10 mb-1"
                >
                  <Icon 
                    className={`w-6 h-6 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400'
                    } transition-colors duration-200`} 
                  />
                </motion.div>

                {/* Label */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    fontWeight: isActive ? 700 : 500
                  }}
                  className={`text-xs relative z-10 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-500'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </motion.span>

                {/* Notification Badge for notifications tab */}
                {item.id === 'notifications' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#fad2e1" }}
                  >
                    <span 
                      className="text-xs font-bold"
                      style={{ color: "#2b2352" }}
                    >
                      3
                    </span>
                  </motion.div>
                )}

                {/* Active indicator glow effect */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1.5 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 rounded-3xl blur-lg -z-10"
                    style={{
                      background: "linear-gradient(135deg, #43165c 0%, #2b2352 100%)"
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}