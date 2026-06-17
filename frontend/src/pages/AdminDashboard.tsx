import { Activity, Users, Image as ImageIcon, MessageSquare, Calendar } from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-pink-dark rounded-full flex items-center justify-center font-bold text-lg">T</div>
          <span className="font-bold text-lg">Tara Admin</span>
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 p-3 bg-blue-800 rounded-lg text-white font-medium">
            <Activity className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors">
            <Calendar className="w-5 h-5" /> Appointments
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors">
            <Users className="w-5 h-5" /> Doctors
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors">
            <ImageIcon className="w-5 h-5" /> Gallery
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5" /> Testimonials
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Admin User</span>
            <div className="w-10 h-10 rounded-full bg-slate-300"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="text-muted-foreground font-medium mb-2">Total Appointments</h3>
            <p className="text-3xl font-bold text-medical-blue">124</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="text-muted-foreground font-medium mb-2">Pending Requests</h3>
            <p className="text-3xl font-bold text-pink-dark">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="text-muted-foreground font-medium mb-2">Active Doctors</h3>
            <p className="text-3xl font-bold text-green-600">5</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Recent Appointment Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="pb-3 font-medium">Patient Name</th>
                  <th className="pb-3 font-medium">Phone</th>
                  <th className="pb-3 font-medium">Doctor</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-50">
                  <td className="py-4 font-medium">Rahul Sharma</td>
                  <td className="py-4 text-muted-foreground">+91 98765 43210</td>
                  <td className="py-4">Dr. Akanksh Dubey</td>
                  <td className="py-4 text-muted-foreground">2026-06-20</td>
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">Pending</span></td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-4 font-medium">Priya Singh</td>
                  <td className="py-4 text-muted-foreground">+91 91234 56789</td>
                  <td className="py-4">Dr. Dimple Mishra</td>
                  <td className="py-4 text-muted-foreground">2026-06-18</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">Confirmed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
