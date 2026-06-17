import { IconStar, IconChevronLeft, IconChevronRight, IconQuote } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  review: string;
  timeAgo: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    patientName: "Alisha",
    rating: 5,
    review: "Dr. Dimple Mishra is an angel. She supported us throughout my high-risk pregnancy and was always available. Best gynecologist ever.",
    timeAgo: "3 years ago"
  },
  {
    id: "2",
    patientName: "Karthigesh",
    rating: 5,
    review: "Excellent explanation and treatment. Very patient and caring doctor. We are blessed to have our baby with her guidance.",
    timeAgo: "3 years ago"
  },
  {
    id: "3",
    patientName: "Sneha",
    rating: 5,
    review: "Dr. Akanksh is a brilliant orthopedic surgeon. He explained the knee replacement procedure clearly and recovery was very fast.",
    timeAgo: "1 year ago"
  },
  {
    id: "4",
    patientName: "Rahul",
    rating: 5,
    review: "State-of-the-art facilities and amazing staff. My surgery went perfectly and the post-op care was exceptional.",
    timeAgo: "6 months ago"
  }
];

export function TestimonialCarousel() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f8fbff] overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[800] text-text">
            What Our Patients Say
          </h2>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-4 md:px-12">
          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
            <IconChevronLeft className="w-6 h-6" stroke={2} />
          </button>
          
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
            <IconChevronRight className="w-6 h-6" stroke={2} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {mockTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-[24px] p-8 border border-[#eef3f8] h-[220px] flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <IconQuote className="absolute top-6 right-6 w-12 h-12 text-[#f0f4ff] opacity-50 group-hover:opacity-100 transition-opacity" stroke={1} />
                  
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="w-[18px] h-[18px] text-[#FBBF24] fill-[#FBBF24]" />
                    ))}
                  </div>
                  
                  <p className="text-[15px] font-[500] text-text leading-relaxed line-clamp-3 mb-4 relative z-10 flex-1">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto border-t border-[#eef3f8] pt-4 relative z-10">
                    <p className="font-[700] text-[15px] text-primary">{testimonial.patientName}</p>
                    <p className="text-[13px] font-[500] text-muted">{testimonial.timeAgo}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4"></div>
        </div>
      </div>
    </section>
  );
}
