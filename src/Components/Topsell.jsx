import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import SellCard from "./SellCard";
import Building from "../assets/building.png";
import Clock from "../assets/clock.png";
import Moscow from "../assets/mosko.png";
import Dos from "../assets/Decore.png";

const Topsell = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detection useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // ✅ শুধু একবার observe করবে
          }
        });
      },
      {
        threshold: 0.2, // 20% দেখা গেলে trigger হবে
        rootMargin: "0px 0px -100px 0px" // Bottom থেকে 100px আগে trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const destinations = [
    {
      src: Building,
      loca: "Rome, Italy",
      price: "$5.42k",
      days: "10 Days Trip",
      delay: 0
    },
    {
      src: Clock,
      loca: "London, UK",
      price: "$4.2k",
      days: "7 Days Trip",
      delay: 100
    },
    {
      src: Moscow,
      loca: "Full Europe",
      price: "$15k",
      days: "28 Days Trip",
      delay: 200
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="Des" 
      className="py-10 md:py-16 lg:py-20 px-4 lg:px-0 overflow-hidden"
    >
      <Container>
        {/* Title Section */}
        <div 
          className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-Poppins font-semibold text-[#5E6282] 
                      text-sm md:text-base lg:text-lg mb-2 md:mb-3">
            Top Selling
          </p>
          <h2 className="text-[#14183E] font-Volkhov font-bold 
                        text-3xl sm:text-4xl md:text-5xl lg:text-[50px]
                        leading-tight">
            Top Destinations
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                         gap-8 md:gap-10 lg:gap-8 xl:gap-12 
                         max-w-6xl mx-auto">
            
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${destination.delay}ms` : '0ms' }}
              >
                <SellCard
                  src={destination.src}
                  loca={destination.loca}
                  price={destination.price}
                  days={destination.days}
                />
              </div>
            ))}
          </div>

          {/* Decorative Image */}
          <div 
            className={`hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 -z-10 transition-all duration-1000 ${isVisible ? 'opacity-80 rotate-0 scale-100' : 'opacity-0 -rotate-12 scale-90'}`}
          >
            <img 
              src={Dos} 
              alt="Decoration" 
              className="w-64 h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Topsell;