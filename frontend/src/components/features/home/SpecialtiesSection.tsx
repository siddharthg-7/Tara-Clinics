import { ArrowRight, Baby, ActivitySquare, Stethoscope, HeartPulse, Check } from "lucide-react";
import { motion } from "framer-motion";

export function SpecialtiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="treatments" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-wider text-pink-dark uppercase mb-3">Our Specialities & Treatments</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-medical-blue">Comprehensive Care for You and Your Family</h3>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Card 1 - Gynecology */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-50 rounded-xl text-pink-500">
                <Baby className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Gynecology & Obstetrics</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm">Complete women's healthcare from adolescence to menopause with compassionate care.</p>
            <ul className="space-y-3 mb-8">
              {["Pregnancy Care", "High-Risk Pregnancy", "PCOS Treatment", "Infertility Care", "Menopause Care"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <Check className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="text-pink-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 2 - Orthopedics */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
                <ActivitySquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Orthopedics & Joint Care</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm">Advanced joint care, pain relief, and mobility restoration tailored to your needs.</p>
            <ul className="space-y-3 mb-8">
              {["Joint Replacement", "Knee & Hip Pain", "Arthroscopy", "Fracture Treatment", "Sports Injuries"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 3 - Diagnostics */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-50 rounded-xl text-green-500">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Diagnostics</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm">Accurate tests and advanced imaging to support better diagnosis and treatment.</p>
            <ul className="space-y-3 mb-8">
              {["Ultrasound", "Laboratory Tests", "Digital X-Ray", "Pathology Services", "Health Packages"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="text-green-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 4 - Surgeries */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Surgeries & Treatments</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm">From minor procedures to complex interventions in state-of-the-art facilities.</p>
            <ul className="space-y-3 mb-8">
              {["General Surgery", "Laparoscopic Surgery", "Day Care Procedures", "Specialized Care", "Post-op Recovery"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="text-indigo-600 font-semibold flex items-center gap-1 hover:underline mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
