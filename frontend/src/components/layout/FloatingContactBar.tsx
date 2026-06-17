import { useState } from "react";
import { IconCalendar, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";

export function FloatingContactBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const actions = [
    {
      id: "book",
      icon: <IconCalendar stroke={2} className="w-5 h-5 text-white" />,
      color: "bg-primary hover:bg-[#0c3eb5]",
      label: "Book Appointment",
      href: "#appointment"
    },
    {
      id: "call",
      icon: <IconPhone stroke={2} className="w-5 h-5 text-white" />,
      color: "bg-pink hover:bg-[#e03a83]",
      label: "Call Now",
      href: "tel:+919989888776"
    },
    {
      id: "whatsapp",
      icon: <IconBrandWhatsapp stroke={2} className="w-5 h-5 text-white" />,
      color: "bg-[#25D366] hover:bg-[#1fae54]",
      label: "WhatsApp",
      href: "https://wa.me/919989888776"
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-2 bg-white p-2 rounded-l-2xl shadow-[-5px_0_20px_rgba(0,0,0,0.08)] border border-r-0 border-[#eef3f8]">
      {actions.map((action, index) => (
        <a
          key={action.id}
          href={action.href}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${action.color}`}
        >
          {action.icon}
          
          {/* Tooltip */}
          <div
            className={`absolute right-[calc(100%+12px)] px-3 py-1.5 bg-[#12284C] text-white text-[13px] font-[600] rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
              hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            {action.label}
            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-[#12284C]"></div>
          </div>
        </a>
      ))}
    </div>
  );
}
