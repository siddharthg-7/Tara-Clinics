import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DoctorsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-800">Manage Doctors</h3>
        <Button className="bg-pink-dark text-white hover:bg-pink-700">Add New Doctor</Button>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Doctor Name</th>
                <th className="px-6 py-4 font-medium">Specialization</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">Dr. Dimple Mishra</td>
                <td className="px-6 py-4 text-slate-600">Gynecology</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Edit</button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">Dr. Akanksh Dubey</td>
                <td className="px-6 py-4 text-slate-600">Orthopedics</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
