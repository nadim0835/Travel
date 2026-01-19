import { motion } from "framer-motion";

function CategoryCard({ src, hData, pData }) {
  const cardVariants = {
    hover: {
      backgroundColor: "#FFFFFF",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group bg-white rounded-2xl p-6 md:p-7 lg:p-6 xl:p-8 
                shadow-lg hover:shadow-2xl 
                transition-all duration-300 
                border border-gray-100 
                h-full flex flex-col items-center text-center
                cursor-pointer"
    >
      {/* Icon Container */}
      <motion.div 
        variants={iconVariants}
        className="mb-6 md:mb-7 lg:mb-6 xl:mb-8 
                  w-16 h-16 md:w-18 md:h-18 lg:w-16 lg:h-16 xl:w-20 xl:h-20 
                  flex items-center justify-center 
                  bg-gradient-to-br from-blue-50 to-purple-50 
                  rounded-2xl group-hover:from-blue-100 group-hover:to-purple-100 
                  transition-all duration-300"
      >
        <img 
          src={src} 
          alt={hData}
          className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 
                    object-contain"
        />
      </motion.div>

      {/* Title */}
      <h3 className="font-Poppins font-semibold 
                    text-lg md:text-xl lg:text-lg xl:text-xl 
                    text-[#1E1D4C] 
                    mb-3 md:mb-4 lg:mb-3 xl:mb-4
                    group-hover:text-[#DF6951] 
                    transition-colors duration-300">
        {hData}
      </h3>

      {/* Description */}
      <p className="font-Poppins text-[#5E6282] 
                   text-sm md:text-base lg:text-sm xl:text-base 
                   leading-relaxed 
                   flex-grow">
        {pData}
      </p>

      {/* Hover Indicator */}
      <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 
                     rounded-full opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300" />
    </motion.div>
  );
}

export default CategoryCard;