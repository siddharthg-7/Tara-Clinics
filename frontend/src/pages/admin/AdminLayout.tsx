import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CalendarDays, Users, Star, Image as ImageIcon, Settings, LogOut } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Appointments", path: "/admin/appointments", icon: <CalendarDays className="w-5 h-5" /> },
    { name: "Doctors", path: "/admin/doctors", icon: <Users className="w-5 h-5" /> },
    { name: "Reviews", path: "/admin/reviews", icon: <Star className="w-5 h-5" /> },
    { name: "Gallery", path: "/admin/gallery", icon: <ImageIcon className="w-5 h-5" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-white font-bold text-lg tracking-wide">Tara Admin</span>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? "bg-pink-600 text-white" : "hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <h2 className="text-xl font-semibold text-slate-800 capitalize">
            {location.pathname === '/admin' ? 'Dashboard' : location.pathname.split('/').pop()}
          </h2>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 bg-pink-100 text-pink-dark rounded-full flex items-center justify-center font-bold text-sm">
               A
             </div>
             <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin User</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}
