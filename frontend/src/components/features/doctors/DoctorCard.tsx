export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  education: string;
  description: string;
  imageUrl: string;
  availability: string;
  patientSatisfaction: string;
  patientStoriesCount: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="w-full max-w-[650px] bg-white border border-[#eef3f8] rounded-[24px] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Image Section */}
        <div className="w-full md:w-[200px] h-[200px] rounded-2xl bg-slate-100 shrink-0 overflow-hidden relative">
          <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1">
          <div className="mb-1">
            <h3 className="text-[24px] font-[700] text-text leading-tight">{doctor.name}</h3>
            <span className="text-[14px] font-[600] text-pink block mt-1">{doctor.education}</span>
          </div>

          <div className="mb-4">
            <p className="text-[16px] font-[500] text-text">{doctor.specialization}</p>
            <p className="text-[15px] font-[500] text-muted">{doctor.experience} Experience</p>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="px-3 py-1.5 bg-[#f0f4ff] rounded-lg text-primary text-[13px] font-[600]">
              {doctor.patientSatisfaction}
            </div>
            <div className="px-3 py-1.5 bg-[#fff0f5] rounded-lg text-pink text-[13px] font-[600]">
              {doctor.patientStoriesCount}
            </div>
          </div>

          <div className="mt-auto">
            <button className="w-full h-[44px] bg-primary hover:bg-[#0c3eb5] text-white rounded-xl text-[15px] font-[600] transition-colors flex items-center justify-center">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
