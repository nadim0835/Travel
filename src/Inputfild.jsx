'use client'
import Container from "./Components/Container";
import { IoMdMail } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Inputfild() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="Booking" className="py-12 md:py-20 lg:py-24 relative">
      <Container>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFD7F9]/10 to-[#FF7D68]/5 -z-10" />
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-Poppins font-bold text-[#14183E] 
                      text-3xl md:text-4xl lg:text-5xl 
                      leading-tight mb-4"
          >
            Stay Updated with Jadoo
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-Poppins text-[#5E6282] text-lg md:text-xl"
          >
            Subscribe to get information, latest news and interesting offers
          </motion.p>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="relative">
            {/* Success Message */}
            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                >
                  🎉 Thanks for subscribing! Check your email for confirmation.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Email Input - FIXED */}
              <div className="flex-1 relative group">
                <IoMdMail className="absolute left-4 top-1/2 transform -translate-y-1/2 
                                    text-[#5E6282] text-xl z-10" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full h-16 pl-12 pr-4
                           bg-white rounded-2xl border-2 border-gray-200 
                           focus:border-[#FF7D68] focus:outline-none 
                           font-Poppins text-[#14183E] text-lg
                           placeholder:text-[#8C8FA6] placeholder:font-normal
                           shadow-lg transition-all duration-300
                           relative z-20" // ✅ z-index added
                  type="email" // ✅ type="email" for better validation
                  required
                />
                {/* Removed overlay div that was blocking input */}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-16 px-8 bg-gradient-to-r from-[#FF7D68] to-[#FF9A8B]
                         text-white font-Poppins font-semibold text-lg 
                         rounded-2xl flex items-center justify-center gap-3
                         shadow-lg hover:shadow-xl transition-all duration-300
                         whitespace-nowrap"
              >
                <span>Subscribe</span>
                <FiSend className="text-xl" />
              </motion.button>
            </div>
          </form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-[#5E6282] text-sm mt-4"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>

        {/* Animated Icons */}
        <div className="absolute top-10 left-10 -z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-2 border-[#FF7D68]/20 rounded-full"
          />
        </div>
        <div className="absolute bottom-10 right-10 -z-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-[#DFD7F9]/30 rounded-full"
          />
        </div>
      </Container>
    </section>
  );
}

export default Inputfild;