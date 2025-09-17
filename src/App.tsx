import { useState, useEffect } from "react";
import { BrightOnboarding } from "./components/BrightOnboarding";
import { AuthScreen } from "./components/AuthScreen";
import { BrightDashboard } from "./components/BrightDashboard";
import { BrightEmergency } from "./components/BrightEmergency";
import { BrightNotifications } from "./components/BrightNotifications";
import { BrightProfile } from "./components/BrightProfile";
import { ComplaintsScreen } from "./components/ComplaintsScreen";
import { ApplicationsScreen } from "./components/ApplicationsScreen";
import { AnnouncementsScreen } from "./components/AnnouncementsScreen";
import { BrightBottomNav } from "./components/BrightBottomNav";

type Screen = 'onboarding' | 'auth' | 'dashboard' | 'emergency' | 'complaints' | 'applications' | 'announcements' | 'profile' | 'notifications' | 'quick-action';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState("Priya Sharma");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('auth');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleBack = () => {
    if (currentScreen === 'auth') {
      setCurrentScreen('onboarding');
    } else if (isLoggedIn) {
      setCurrentScreen('dashboard');
    }
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <BrightOnboarding onComplete={handleOnboardingComplete} />;
      
      case 'auth':
        return <AuthScreen onLogin={handleLogin} onBack={handleBack} />;
      
      case 'dashboard':
        return (
          <BrightDashboard 
            onNavigate={handleNavigate} 
            userName={userName}
          />
        );
      
      case 'emergency':
        return <BrightEmergency onBack={handleBack} />;
      
      case 'profile':
        return <BrightProfile onBack={handleBack} onLogout={handleLogout} userName={userName} />;
      
      case 'complaints':
        return <ComplaintsScreen onBack={handleBack} />;
      
      case 'applications':
        return <ApplicationsScreen onBack={handleBack} />;
      
      case 'announcements':
        return <AnnouncementsScreen onBack={handleBack} />;
      
      case 'notifications':
        return <BrightNotifications onBack={handleBack} />;
      
      case 'quick-action':
        return <PlaceholderScreen title="Quick Actions" onBack={handleBack} />;
      
      default:
        return (
          <BrightDashboard 
            onNavigate={handleNavigate} 
            userName={userName}
          />
        );
    }
  };

  const showBottomNav = isLoggedIn && !['onboarding', 'auth'].includes(currentScreen);

  return (
    <div className="relative">
      {renderScreen()}
      {showBottomNav && (
        <BrightBottomNav
          activeTab={currentScreen}
          onTabChange={handleNavigate}
        />
      )}
    </div>
  );
}

// Placeholder component for screens not fully implemented
function PlaceholderScreen({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm p-4 flex items-center">
        <button onClick={onBack} className="mr-4">
          ← Back
        </button>
        <h1 className="font-medium">{title}</h1>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">This screen is coming soon!</p>
      </div>
    </div>
  );
}