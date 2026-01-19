import CategoryCard from "./CategoryCard";
import Container from "./Container";
import Flex from "./Flex";
import antena from "../assets/Card.png";
import plane from "../assets/plane.png";
import mike from "../assets/mike.png";
import seting from "../assets/seting.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Category() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9 
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: i * 0.15
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="mt-10 md:mt-16 lg:mt-24 px-4 lg:px-0"
    >
      <Container>
        {/* Title Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <motion.p 
            variants={titleVariants}
            className="font-Poppins font-semibold text-[#5E6282] 
                      text-sm md:text-base lg:text-lg mb-2"
          >
            CATEGORY
          </motion.p>
          <motion.h2 
            variants={titleVariants}
            className="text-[#14183E] font-Volkhov font-bold 
                      text-3xl sm:text-4xl md:text-5xl lg:text-[50px]
                      leading-tight"
          >
            We Offer Best Services
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                         gap-6 md:gap-8 lg:gap-6 xl:gap-8 
                         max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <motion.div
              custom={0}
              variants={cardVariants}
              whileHover="hover"
            >
              <CategoryCard
                src={antena}
                hData="Calculated Weather"
                pData="Built Wicket longer admire do barton vanity itself do in it."
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              custom={1}
              variants={cardVariants}
              whileHover="hover"
            >
              <CategoryCard
                src={plane}
                hData="Best Flights"
                pData="Engrossed listening. Park gate sell they west hard for the."
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              custom={2}
              variants={cardVariants}
              whileHover="hover"
            >
              <CategoryCard
                src={mike}
                hData="Local Events"
                pData="Barton vanity itself do in it. Preferd to men it engrossed listening."
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              custom={3}
              variants={cardVariants}
              whileHover="hover"
            >
              <CategoryCard
                src={seting}
                hData="Customization"
                pData="We deliver outsourced aviation services for military customers"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default Category;