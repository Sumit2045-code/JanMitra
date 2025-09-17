import { motion } from "motion/react";
import { 
  Home, 
  FileText, 
  Bell, 
  User, 
  Zap 
} from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDark: boolean;
}

export function BottomNavigation({ activeTab, onTabChange, isDark }: BottomNavigationProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: Home,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'applications',
      label: 'Services',
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'quick-action',
      label: 'Quick',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      isCenter: true
    },
    {
      id: 'notifications',
      label: 'Updates',
      icon: Bell,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
    >
      <div className={`
        glassmorphism rounded-3xl p-2
        ${isDark 
          ? 'bg-gray-900/80 border-gray-700/50' 
          : 'bg-white/80 border-white/30'
        }
        shadow-2xl backdrop-blur-2xl
      `}>
        <div className="flex items-center justify-around">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`
                  relative flex flex-col items-center justify-center p-3 rounded-2xl
                  ${item.isCenter ? 'w-16 h-16' : 'w-14 h-14'}
                  transition-all duration-300
                `}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-r ${item.color}
                      ${item.isCenter ? 'shadow-2xl' : 'shadow-lg'}
                    `}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Center Action Button Special Treatment */}
                {item.isCenter && !isActive && (
                  <div className={`
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-r ${item.color} opacity-90
                    shadow-xl
                  `} />
                )}

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    rotate: item.isCenter && isActive ? 360 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    rotate: { duration: 0.6 } 
                  }}
                  className="relative z-10"
                >
                  <Icon 
                    className={`
                      ${item.isCenter ? 'w-6 h-6' : 'w-5 h-5'}
                      ${isActive || item.isCenter 
                        ? 'text-white' 
                        : isDark ? 'text-gray-400' : 'text-gray-600'
                      }
                      drop-shadow-sm
                    `} 
                  />
                </motion.div>

                {/* Label */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 2
                  }}
                  className={`
                    text-xs font-medium mt-1 relative z-10
                    ${isActive || item.isCenter 
                      ? 'text-white' 
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                    }
                    ${item.isCenter ? 'hidden' : 'block'}
                    drop-shadow-sm
                  `}
                >
                  {item.label}
                </motion.span>

                {/* Notification Badge for certain items */}
                {item.id === 'notifications' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">3</span>
                  </motion.div>
                )}

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 0 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `radial-gradient(circle, ${
                      item.color.includes('blue') ? '#3b82f6' :
                      item.color.includes('green') ? '#10b981' :
                      item.color.includes('orange') ? '#f97316' :
                      item.color.includes('pink') ? '#ec4899' :
                      '#6366f1'
                    }40 0%, transparent 70%)`
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}