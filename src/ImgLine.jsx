'use client'
import { motion } from "framer-motion"
import Container from "./Components/Container"
import Imgone from "../src/assets/imgone.png"
import Imgtwo from "../src/assets/imgtwo.png"
import Imgthree from "../src/assets/imgthree.png"

const ImgLine = () => {
  const logos = [Imgone, Imgtwo, Imgthree, Imgone, Imgtwo]
  
  // Create infinite loop array
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos]
  
  return (
    <section id="Flight" className="py-8 md:py-12 lg:py-16">
      <Container>
        <div className="relative overflow-hidden">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex"
            animate={{ 
              x: [0, -100 * logos.length] // Dynamic calculation
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {infiniteLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 px-4 md:px-6 lg:px-8"
              >
                <div className="p-3 md:p-4 lg:p-5 rounded-xl bg-white shadow-md">
                  <img 
                    src={logo} 
                    alt={`Partner Logo ${idx % 5 + 1}`}
                    className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default ImgLine