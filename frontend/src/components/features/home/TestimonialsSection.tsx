import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Alisha",
    time: "3 years ago",
    text: "Dr. Dimple Mishra is an angel of a person. She supported us throughout my high-risk pregnancy and was always available whenever needed.",
    rating: 5
  },
  {
    id: 2,
    name: "Kartilingam",
    time: "3 years ago",
    text: "Excellent explanation and treatment. Very patient and caring doctor. We are blessed to have our baby with her guidance.",
    rating: 5
  },
  {
    id: 3,
    name: "User",
    time: "3 years ago",
    text: "Emergency C-section was performed at the right time and saved both mother and baby. Highly dedicated and selfless doctor.",
    rating: 5
  },
  {
    id: 4,
    name: "Rahul Verma",
    time: "1 year ago",
    text: "Dr. Akanksh is brilliant. My knee replacement surgery went so smoothly and I was walking in days.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="patient-stories" className="py-24 bg-medical-blue relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <Quote className="w-96 h-96 absolute -left-20 -top-20 text-white rotate-180" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-pink-300 uppercase mb-3">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">What Our Patients Say</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="overflow-hidden px-4 py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white border-none shadow-2xl rounded-2xl h-full">
                    <CardContent className="p-8 md:p-12 text-center md:text-left relative">
                      <Quote className="w-16 h-16 text-slate-100 absolute top-4 right-8 rotate-180" />
                      
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-2xl text-slate-700 italic leading-relaxed mb-8 relative z-10">
                        "{review.text}"
                      </p>
                      
                      <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl">
                          {review.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-medical-blue text-lg">{review.name}</p>
                          <p className="text-sm text-slate-500">{review.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
