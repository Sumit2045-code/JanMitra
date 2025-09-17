import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, 
  Plus, 
  FileText, 
  MapPin, 
  Camera,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface ComplaintsScreenProps {
  onBack: () => void;
}

export function ComplaintsScreen({ onBack }: ComplaintsScreenProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    location: "",
    priority: ""
  });

  const existingComplaints = [
    {
      id: "C001",
      title: "Street Light Not Working",
      category: "Infrastructure",
      status: "In Progress",
      priority: "Medium",
      date: "2024-01-15",
      location: "Main Street & 5th Ave"
    },
    {
      id: "C002",
      title: "Pothole on Highway",
      category: "Roads",
      status: "Resolved",
      priority: "High",
      date: "2024-01-10",
      location: "Highway 101, Mile 15"
    },
    {
      id: "C003",
      title: "Noise Complaint",
      category: "Public Safety",
      status: "Under Review",
      priority: "Low",
      date: "2024-01-08",
      location: "Residential Area Block 5"
    }
  ];

  const categories = [
    "Infrastructure",
    "Roads",
    "Public Safety",
    "Utilities",
    "Environment",
    "Transportation",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowForm(false);
    setFormData({ category: "", title: "", description: "", location: "", priority: "" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case "Medium":
        return <Clock className="w-4 h-4 text-orange-600" />;
      case "Low":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="ml-4 font-medium">File New Complaint</h1>
          </div>
        </div>

        <div className="p-6">
          <Card className="p-6 border-0 shadow-sm bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="mt-1 h-12 rounded-xl">
                    <SelectValue placeholder="Select complaint category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Brief description of the issue"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="mt-1 h-12 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the issue"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="mt-1 rounded-xl min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative mt-1">
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter the location of the issue"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="h-12 rounded-xl pl-10"
                  />
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                  <SelectTrigger className="mt-1 h-12 rounded-xl">
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Attachments (Optional)</Label>
                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full mt-1 h-12 rounded-xl border-dashed"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Add Photos
                </Button>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button 
                  type="button"
                  variant="outline" 
                  className="flex-1 rounded-xl h-12"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12"
                >
                  Submit Complaint
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="ml-4 font-medium">My Complaints</h1>
        </div>
        <Button 
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          onClick={() => setShowForm(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          New
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">3</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-orange-600">2</div>
              <div className="text-xs text-gray-600">Pending</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">1</div>
              <div className="text-xs text-gray-600">Resolved</div>
            </div>
          </Card>
        </div>

        {/* Complaints List */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Recent Complaints</h2>
          <div className="space-y-3">
            {existingComplaints.map((complaint) => (
              <Card key={complaint.id} className="p-4 border-0 shadow-sm bg-white">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-gray-900">{complaint.title}</h3>
                        {getPriorityIcon(complaint.priority)}
                      </div>
                      <p className="text-sm text-gray-600">{complaint.category}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-600">{complaint.location}</p>
                      </div>
                    </div>
                    <Badge className={`text-xs ${getStatusColor(complaint.status)}`}>
                      {complaint.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>ID: {complaint.id}</span>
                    <span>Filed: {complaint.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <Card className="p-4 border-blue-200 bg-blue-50 shadow-sm">
          <div className="flex items-start space-x-3">
            <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-blue-900">Filing Tips</h3>
              <p className="text-sm text-blue-700 mt-1">
                Be specific about the location and provide as much detail as possible for faster resolution.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}