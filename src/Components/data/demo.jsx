'use client'
import { motion } from "framer-motion"
import { useRef } from "react"
import Container from "./Components/Container"
import Imgone from "../src/assets/imgone.png"
import Imgtwo from "../src/assets/imgtwo.png"
import Imgthree from "../src/assets/imgthree.png"

const ImgLine = () => {
  const containerRef = useRef(null)
  
  const images = [
    { src: Imgone, alt: "Logo 1" },
    { src: Imgtwo, alt: "Logo 2" },
    { src: Imgthree, alt: "Logo 3" },
    { src: Imgone, alt: "Logo 4" },
    { src: Imgtwo, alt: "Logo 5" },
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <section id="Flight" className="py-10 md:py-16 overflow-hidden">
      <Container>
        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex items-center"
            animate={{ 
              x: ["0%", "-100%"] 
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-4 md:mx-8 lg:mx-12"
              >
                <div className="p-4 md:p-6 rounded-2xl bg-white shadow-lg 
                             ">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain 
                              
                              transition-all duration-300"
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