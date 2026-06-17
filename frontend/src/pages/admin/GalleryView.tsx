import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function GalleryView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-800">Clinic Gallery</h3>
        <Button className="bg-pink-dark text-white hover:bg-pink-700">Upload Image</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="overflow-hidden group">
            <div className="aspect-square bg-slate-200 relative">
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                 <button className="text-white text-xs font-bold hover:underline">Delete</button>
               </div>
            </div>
            <CardContent className="p-3">
              <p className="text-xs font-medium text-slate-600 truncate">Image_{i}.jpg</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
