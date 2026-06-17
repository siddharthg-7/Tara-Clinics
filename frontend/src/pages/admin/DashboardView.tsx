import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarDays, Star, Activity } from "lucide-react";

export function DashboardView() {
  const stats = [
    { title: "Total Appointments", value: "1,234", icon: <CalendarDays className="w-6 h-6 text-blue-500" />, trend: "+12% this month" },
    { title: "Active Doctors", value: "12", icon: <Users className="w-6 h-6 text-green-500" />, trend: "All available" },
    { title: "Pending Reviews", value: "8", icon: <Star className="w-6 h-6 text-yellow-500" />, trend: "Requires attention" },
    { title: "Patient Growth", value: "+24%", icon: <Activity className="w-6 h-6 text-pink-500" />, trend: "Compared to last month" },
  ];

  return (
    <div className="space-y-6">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-slate-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <p className="text-xs text-slate-500 mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-500 py-8 text-center border-2 border-dashed border-slate-200 rounded-lg">
              [Appointment Data Table Placeholder]
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">Review Approval</p>
                  <p className="text-xs text-slate-500">From Patient #{100+i}</p>
                </div>
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-800">View</button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
