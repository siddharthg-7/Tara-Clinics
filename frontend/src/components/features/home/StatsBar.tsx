import { IconAward, IconStethoscope, IconUsers, IconActivity } from "@tabler/icons-react";
import CountUpModule from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Handle potential ESM default import issues in Vite
const CountUp: any = (CountUpModule as any).default || CountUpModule;

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    {
      icon: <IconAward className="w-8 h-8 text-primary" stroke={1.5} />,
      value: 12,
      suffix: "+",
      label: "Years of Excellence",
      bg: "bg-primary-light"
    },
    {
      icon: <IconStethoscope className="w-8 h-8 text-pink" stroke={1.5} />,
      value: 50,
      suffix: "+",
      label: "Specialized Doctors",
      bg: "bg-pink-light"
    },
    {
      icon: <IconUsers className="w-8 h-8 text-primary" stroke={1.5} />,
      value: 1000,
      suffix: "+",
      label: "Happy Patients",
      bg: "bg-[#f0f4ff]"
    },
    {
      icon: <IconActivity className="w-8 h-8 text-pink" stroke={1.5} />,
      value: 20,
      suffix: "+",
      label: "Advanced Treatments",
      bg: "bg-[#fff0f5]"
    }
  ];

  return (
    <div className="container max-w-[1400px] mx-auto px-4 md:px-8 mt-10 md:mt-16 mb-16 relative z-30" ref={ref}>
      <div className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-[#eef3f8] p-8 md:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-[#eef3f8]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
              <div className={`w-[70px] h-[70px] rounded-[20px] ${stat.bg} flex items-center justify-center shrink-0 transition-transform hover:-translate-y-1 duration-300`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[36px] font-[800] text-text leading-none mb-1">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  <span className="text-pink">{stat.suffix}</span>
                </h3>
                <p className="text-[15px] font-[600] text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
