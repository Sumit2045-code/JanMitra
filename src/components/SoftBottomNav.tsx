import { motion } from "motion/react";
import { 
  Home, 
  FileText, 
  Bell, 
  User, 
  Phone
} from "lucide-react";

interface SoftBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SoftBottomNav({ activeTab, onTabChange }: SoftBottomNavProps) {
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
      <div className="health-block p-2 bg-white/90 backdrop-blur-xl border border-white/30">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="relative flex flex-col items-center justify-center p-3 w-16 h-16 rounded-2xl transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15
                  }}
                  className="relative z-10 mb-1"
                >
                  <Icon 
                    className={`w-5 h-5 ${
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
                  }}
                  className={`text-xs font-medium relative z-10 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-500'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </motion.span>

                {/* Notification Badge for certain items */}
                {item.id === 'notifications' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">3</span>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}