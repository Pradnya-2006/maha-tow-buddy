
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { PlusCircle, List, Settings, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-10">
        <div className="gov-container">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-lg mt-2 opacity-90">Manage towing details and system data</p>
        </div>
      </div>

      <div className="gov-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PlusCircle className="mr-2 h-5 w-5 text-amber-600" />
                Add New Details
              </CardTitle>
              <CardDescription>Add new towing records to the system</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                <Link to="/admin/add-details">Add New Record</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <List className="mr-2 h-5 w-5 text-amber-600" />
                View All Records
              </CardTitle>
              <CardDescription>Browse and manage existing records</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/admin/all-records">View Records</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-amber-600" />
                User Management
              </CardTitle>
              <CardDescription>Manage system users and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/admin/users">Manage Users</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5 text-amber-600" />
                System Settings
              </CardTitle>
              <CardDescription>Configure system parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/admin/settings">Settings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
