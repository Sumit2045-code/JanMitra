import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  Plus, 
  FileText, 
  Calendar, 
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  Search
} from "lucide-react";

interface ApplicationsScreenProps {
  onBack: () => void;
}

export function ApplicationsScreen({ onBack }: ApplicationsScreenProps) {
  const [activeTab, setActiveTab] = useState("all");

  const applications = [
    {
      id: "APP001",
      title: "Birth Certificate",
      type: "Certificate",
      status: "Approved",
      submittedDate: "2024-01-10",
      lastUpdate: "2024-01-15",
      estimatedCompletion: "2024-01-20",
      fee: "$25.00",
      canDownload: true
    },
    {
      id: "APP002",
      title: "Business License Renewal",
      type: "License",
      status: "Under Review",
      submittedDate: "2024-01-12",
      lastUpdate: "2024-01-14",
      estimatedCompletion: "2024-01-25",
      fee: "$150.00",
      canDownload: false
    },
    {
      id: "APP003",
      title: "Property Tax Assessment",
      type: "Assessment",
      status: "Processing",
      submittedDate: "2024-01-08",
      lastUpdate: "2024-01-13",
      estimatedCompletion: "2024-01-30",
      fee: "$50.00",
      canDownload: false
    },
    {
      id: "APP004",
      title: "Marriage Certificate",
      type: "Certificate",
      status: "Pending Documents",
      submittedDate: "2024-01-05",
      lastUpdate: "2024-01-12",
      estimatedCompletion: "2024-02-05",
      fee: "$35.00",
      canDownload: false
    }
  ];

  const quickServices = [
    {
      title: "Birth Certificate",
      description: "Request official birth certificate",
      icon: FileText,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Business License",
      description: "Apply for business license",
      icon: FileText,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Marriage Certificate",
      description: "Request marriage certificate",
      icon: FileText,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Property Records",
      description: "Access property documents",
      icon: FileText,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-orange-100 text-orange-800";
      case "Pending Documents":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Under Review":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "Processing":
        return <Clock className="w-4 h-4 text-orange-600" />;
      case "Pending Documents":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredApplications = applications.filter(app => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return ["Under Review", "Processing", "Pending Documents"].includes(app.status);
    if (activeTab === "completed") return app.status === "Approved";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="ml-4 font-medium">My Applications</h1>
        </div>
        <Button 
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          <Plus className="w-4 h-4 mr-2" />
          Apply
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">4</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-orange-600">3</div>
              <div className="text-xs text-gray-600">Pending</div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-white">
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">1</div>
              <div className="text-xs text-gray-600">Completed</div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-xl">
            <TabsTrigger value="all" className="rounded-xl">All</TabsTrigger>
            <TabsTrigger value="pending" className="rounded-xl">Pending</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-xl">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-3">
              {filteredApplications.map((application) => (
                <Card key={application.id} className="p-4 border-0 shadow-sm bg-white">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900">{application.title}</h3>
                          {getStatusIcon(application.status)}
                        </div>
                        <p className="text-sm text-gray-600">{application.type}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Submitted: {application.submittedDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>Est. completion: {application.estimatedCompletion}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`text-xs mb-2 ${getStatusColor(application.status)}`}>
                          {application.status}
                        </Badge>
                        <p className="text-sm font-medium text-gray-900">{application.fee}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">ID: {application.id}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="h-8 rounded-lg">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        {application.canDownload && (
                          <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Services */}
        <div>
          <h2 className="font-medium text-gray-900 mb-4">Quick Services</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickServices.map((service, index) => (
              <Card 
                key={index}
                className="p-4 border-0 shadow-sm cursor-pointer transition-all hover:shadow-md bg-white"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-full ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{service.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <Card className="p-4 border-blue-200 bg-blue-50 shadow-sm">
          <div className="flex items-start space-x-3">
            <Search className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-blue-900">Need Help?</h3>
              <p className="text-sm text-blue-700 mt-1">
                Check our FAQ section or contact support for assistance with your applications.
              </p>
              <Button variant="link" className="p-0 h-auto text-sm text-blue-600 mt-2">
                View FAQ →
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}