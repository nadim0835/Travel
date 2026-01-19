import { motion } from "framer-motion";

const SellCard = ({ src, loca, price, days }) => {
  const cardVariants = {
    hover: {
      backgroundColor: "#FFFFFF",
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl 
                overflow-hidden transition-all duration-300 
                border border-gray-100 w-full max-w-sm 
                cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <motion.img 
          src={src} 
          alt={loca}
          variants={imageVariants}
          className="w-full h-48 md:h-56 lg:h-52 xl:h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 lg:p-6 xl:p-8">
        {/* Location and Price Row */}
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h3 className="font-Poppins font-semibold text-lg md:text-xl 
                        text-[#14183E] group-hover:text-[#DF6951] 
                        transition-colors duration-300">
            {loca}
          </h3>
          <span className="font-Poppins font-medium text-base md:text-lg 
                          text-[#DF6951] bg-orange-50 px-3 py-1 
                          rounded-lg group-hover:bg-[#DF6951] 
                          group-hover:text-white transition-all duration-300">
            {price}
          </span>
        </div>

        {/* Trip Duration */}
        <div className="flex items-center">
          <svg 
            className="w-5 h-5 text-gray-400 mr-2 group-hover:text-[#DF6951] 
                      transition-colors duration-300" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="font-Poppins text-sm md:text-base text-gray-600">
            {days}
          </span>
        </div>

        {/* Hover Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 
                    text-[#14183E] font-Poppins font-medium rounded-xl 
                    border border-gray-200 group-hover:from-blue-100 
                    group-hover:to-purple-100 group-hover:border-[#DF6951] 
                    transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SellCard;