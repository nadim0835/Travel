import Container from "./Container";
import Flex from "./Flex";
import { FaRegCirclePlay } from "react-icons/fa6";
import Heroimg from "../assets/Image.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="pt-[80px] lg:pt-[100px] px-4 lg:px-0"
    >
      <Container>
        <div className="overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Flex order পরিবর্তন করা হয়েছে */}
            <Flex className="justify-between items-center lg:flex-row flex-col lg:gap-12 gap-8">
              
              {/* Left Side - Image (Now first in desktop) */}
              <motion.div 
                className="lg:w-[45%] w-full"
                variants={imageVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.img 
                    src={Heroimg} 
                    alt="Travel Illustration"
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Text Content (Now second in desktop) */}
              <motion.div 
                className="lg:w-[50%] w-full text-center lg:text-left"
                variants={containerVariants}
              >
                <motion.h5 
                  variants={textVariants}
                  className="text-lg lg:text-xl font-Poppins font-bold text-[#DF6951] mb-2 lg:mb-4"
                >
                  Best Destinations around the world
                </motion.h5>
                
                <motion.h1 
                  variants={textVariants}
                  className="font-Volkhov font-bold leading-[1.2] text-[#181E4B] 
                            text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] 
                            mb-4 lg:mb-6"
                >
                  Travel, enjoy and live a new and full life
                </motion.h1>
                
                <motion.p 
                  variants={textVariants}
                  className="text-[15px] lg:text-[16px] font-Poppins font-medium 
                            text-[#5E6282] leading-relaxed mb-6 lg:mb-8
                            max-w-xl mx-auto lg:mx-0"
                >
                  Built Wicket longer admire do barton vanity itself do in it. 
                  Preferred to sportsmen it engrossed listening. Park gate sell 
                  they west hard for the.
                </motion.p>
                
                <motion.div 
                  variants={textVariants}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-0"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#fff",
                      color: "#F1A501"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 lg:px-7 lg:py-3 bg-[#F1A501] text-white font-Poppins 
                              font-semibold text-base lg:text-[16px] rounded-[10px] border-2 border-[#F1A501] 
                              transition-all duration-300 w-full sm:w-auto"
                  >
                    Find out more
                  </motion.button>
                  
                  <motion.div 
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <FaRegCirclePlay 
                        className="text-3xl lg:text-4xl text-white bg-[#DF6951] 
                                  rounded-full p-2 hover:bg-[#e55c3a] 
                                  transition-colors duration-300"
                      />
                    </motion.div>
                    <span className="text-[#686D77] font-Poppins font-medium 
                              text-base lg:text-[16px] hover:text-[#DF6951] 
                              transition-colors duration-300">
                      Play Demo
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>

            </Flex>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;