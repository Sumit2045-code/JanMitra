import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { ArrowLeft, Eye, EyeOff, Smartphone } from "lucide-react";

interface AuthScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

export function AuthScreen({ onLogin, onBack }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="ml-4 font-medium">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
      </div>

      <div className="flex-1 p-6">
        <Card className="p-6 shadow-sm border-0 bg-white">
          <div className="space-y-6">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {isLogin ? "Sign In" : "Sign Up"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isLogin 
                  ? "Enter your credentials to access your account"
                  : "Create your account to get started"
                }
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1 h-12 rounded-xl border-gray-200"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative mt-1">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="h-12 rounded-xl border-gray-200 pl-10"
                  />
                  <Smartphone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1 h-12 rounded-xl border-gray-200"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="h-12 rounded-xl border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
                    Forgot Password?
                  </Button>
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 shadow-lg"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                or
              </span>
            </div>

            <Button 
              variant="outline" 
              className="w-full rounded-xl h-12 border-gray-200"
            >
              Continue with OTP
            </Button>

            <div className="text-center">
              <span className="text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <Button 
                variant="link" 
                className="p-0 h-auto text-blue-600"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}