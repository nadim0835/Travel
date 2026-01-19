import Container from "./Container"
import Flex from "./Flex"
import logo from "../assets/Logo.png"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { TiThMenuOutline } from "react-icons/ti"
import { MdRestaurantMenu } from "react-icons/md"

function Navber() {
  const [dDown, setdDown] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    setdDown(!dDown)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dDown && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setdDown(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [dDown])

  // Animation variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  const menuButtonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 180,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.9 }
  }

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring" }
    }
  }

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <Flex className="justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <img className="h-10 w-auto" src={logo} alt="logo" />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-[55px]">
              {["Destinations", "Hotels", "Flights", "Bookings"].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={menuItemVariants}
                  custom={index}
                >
                  <motion.a
                    whileHover={{ 
                      scale: 1.1,
                      color: "#DF6951"
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={`#${item}`}
                    className="font-Poppins font-medium text-[17px] text-[#212832] relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DF6951] group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                </motion.li>
              ))}

              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ 
                    backgroundColor: "#DF6951",
                    borderColor: "#DF6951",
                    color: "white"
                  }}
                  className="font-Poppins font-medium text-[#212832] py-2 px-5 border border-[#212832] rounded-lg cursor-pointer transition-colors"
                >
                  Sign up
                </motion.button>
              </motion.li>
            </ul>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={menuButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="menu-button lg:hidden relative z-60 p-2 rounded-lg bg-white shadow-md"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {dDown ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <MdRestaurantMenu className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <TiThMenuOutline className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Flex>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {dDown && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mobile-menu lg:hidden absolute left-4 right-4 mt-4 bg-white rounded-xl shadow-2xl p-6 z-40"
            >
              <ul className="flex flex-col gap-4">
                {["Destinations", "Hotels", "Flights", "Bookings"].map((item, index) => (
                  <motion.li 
                    key={item}
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ x: 10 }}
                  >
                    <a
                      href={`#${item}`}
                      className="font-Poppins font-medium text-[18px] text-[#212832] hover:text-[#DF6951] transition-colors block py-3 px-4 rounded-lg hover:bg-gray-50"
                      onClick={() => setdDown(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  variants={menuItemVariants}
                  custom={4}
                  className="mt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full font-Poppins font-medium text-[#212832] py-3 border-2 border-[#212832] rounded-lg cursor-pointer hover:bg-[#212832] hover:text-white transition-colors"
                    onClick={() => setdDown(false)}
                  >
                    Sign up
                  </motion.button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  )
}

export default Navber