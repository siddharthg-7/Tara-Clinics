import { Card, CardContent } from "@/components/ui/card";

export function ReviewsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-800">Manage Patient Reviews</h3>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Patient Name</th>
                <th className="px-6 py-4 font-medium">Review</th>
                <th className="px-6 py-4 font-medium">Rating</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">Alisha</td>
                <td className="px-6 py-4 text-slate-600 truncate max-w-xs">Dr. Dimple is an angel...</td>
                <td className="px-6 py-4 text-slate-600">5 Stars</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-green-600 hover:text-green-800 font-medium text-xs">Approve</button>
                  <button className="text-red-600 hover:text-red-800 font-medium text-xs">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
