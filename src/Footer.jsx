'use client'
import Container from "./Components/Container";
import Footerimg from "../src/assets/foter.png";
import facebook from "../src/assets/Social.png"
import Insta from "../src/assets/Social (1).png"
import Twitter from "../src/assets/Social (2).png"
import playstore from "../src/assets/Play Store.png"
import googleplay from "../src/assets/Google Play.png"
import { motion } from "framer-motion";

function Footer() {
  const footerLinks = {
    company: ["About", "Careers", "Mobile"],
    contact: ["Help/FAQ", "Press", "Affiliates"],
    more: ["Airlinefees", "Airline", "Low fare tips"]
  };

  const socialIcons = [
    { src: facebook, alt: "Facebook" },
    { src: Insta, alt: "Instagram" },
    { src: Twitter, alt: "Twitter" }
  ];

  const storeButtons = [
    { src: googleplay, alt: "Google Play Store" },
    { src: playstore, alt: "Apple App Store" }
  ];

  return (
    <footer className="py-10 px-4 md:px-0 overflow-hidden">
      <Container>
        {/* Main Footer Content - Mobile Friendly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          
          {/* Logo Section - Full width on mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-6 lg:mb-0"
          >
            <img 
              src={Footerimg} 
              alt="Jadoo Logo" 
              className="h-10 w-auto mb-4 mx-auto sm:mx-0"
            />
            <p className="font-Poppins text-[#5E6282] text-sm text-center sm:text-left">
              Book your trip in minute, get full Control for much longer.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="font-bold font-Poppins text-black text-base sm:text-lg mb-3 text-center sm:text-left">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li 
                  key={item}
                  className="font-Poppins text-[#5E6282] text-sm sm:text-base font-medium text-center sm:text-left cursor-pointer hover:text-[#FF7D68] transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="font-bold font-Poppins text-black text-base sm:text-lg mb-3 text-center sm:text-left">
              Contact
            </h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((item) => (
                <li 
                  key={item}
                  className="font-Poppins text-[#5E6282] text-sm sm:text-base font-medium text-center sm:text-left cursor-pointer hover:text-[#FF7D68] transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="font-bold font-Poppins text-black text-base sm:text-lg mb-3 text-center sm:text-left">
              More
            </h3>
            <ul className="space-y-2">
              {footerLinks.more.map((item) => (
                <li 
                  key={item}
                  className="font-Poppins text-[#5E6282] text-sm sm:text-base font-medium text-center sm:text-left cursor-pointer hover:text-[#FF7D68] transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & App Stores - Full width on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-bold font-Poppins text-black text-base sm:text-lg mb-4 text-center sm:text-left">
              Social
            </h3>
            
            {/* Social Icons - Center on mobile */}
            <div className="flex gap-3 mb-6 justify-center sm:justify-start">
              {socialIcons.map((icon) => (
                <div
                  key={icon.alt}
                  className="cursor-pointer"
                >
                  <img 
                    src={icon.src} 
                    alt={icon.alt}
                    className="h-8 w-8 sm:h-9 sm:w-9 p-1.5 sm:p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* App Store Buttons - Center on mobile */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 items-center sm:items-start">
              {storeButtons.map((store) => (
                <div
                  key={store.alt}
                  className="cursor-pointer w-full sm:w-auto"
                >
                  <img 
                    src={store.src} 
                    alt={store.alt}
                    className="h-9 sm:h-10 w-auto rounded hover:opacity-90 transition-opacity duration-300 mx-auto sm:mx-0"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gray-200 my-8 md:my-10"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="font-Poppins text-[#5E6282] text-xs sm:text-sm font-medium">
            All rights reserved © {new Date().getFullYear()} jadoo.com
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;