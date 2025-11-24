import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { heroSlides } from '../../data/mockData';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
      {/* Additional decorative images */}
      <div className="hidden md:block absolute top-4 left-4 z-10">
        <div><img src="/images/24-hours.png" alt="24 Hours Service" className="w-16 h-16" /></div>
      </div>
      <div className="hidden md:block absolute top-4 right-4 z-10">
        <div><img src="/images/Affordable Price.png" alt="Affordable Price" className="w-16 h-16" /></div>
      </div>
      <div className="hidden lg:block absolute bottom-4 left-4 z-10">
        <div><img src="/images/free.png" alt="Free Consultation" className="w-16 h-16" /></div>
      </div>
      <div className="hidden lg:block absolute bottom-4 right-4 z-10">
        <div><img src="/images/quality-rem.png" alt="Quality Work" className="w-16 h-16" /></div>
      </div>
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button asLink to="/services" size="lg" className="text-sm sm:text-base">View All Services</Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;