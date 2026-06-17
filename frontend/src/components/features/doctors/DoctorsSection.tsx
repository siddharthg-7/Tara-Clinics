import { type Doctor, DoctorCard } from "./DoctorCard";

// Mock data
const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Dimple Mishra",
    specialization: "Gynecologist & Obstetrician",
    experience: "15+ Years",
    education: "MBBS, DNB",
    description: "",
    imageUrl: "/assests/Dr_Dimple_Mishra.png",
    availability: "",
    patientSatisfaction: "10,000+ Surgeries",
    patientStoriesCount: "15+ Years"
  },
  {
    id: "2",
    name: "Dr. Akanksh Dubey",
    specialization: "Orthopedic Surgeon",
    experience: "12+ Years",
    education: "MS Orthopedics, MBBS",
    description: "",
    imageUrl: "/assests/Dr_Akanksh_Dubey.png",
    availability: "",
    patientSatisfaction: "5,000+ Surgeries",
    patientStoriesCount: "12+ Years"
  }
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            Meet Our Founders
          </h2>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 justify-items-center max-w-[1300px] mx-auto">
          {mockDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
