import Container from "./Container"
import Flex from "./Flex"
import logo from "../assets/Logo.png"
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";




function Navber() {

      const [dDown, setdDown] = useState(false);
  let handleClick = () => {
    setdDown(!dDown);
  };
  return (
    <nav className=" absolute top-0 left-0 right-0  lg:mt-[10px] mt-4 p-4">
        <Container>
            <Flex className={`lg:justify-between lg:items-center lg:flex-row flex-col   `}>
                <img className=" size-fit" src={logo} alt="logo" />
                <div className=" absolute  left-5 lg:static ">
                    <ul className={` flex lg:flex-row flex-col lg:items-center lg:justify-between gap-2 lg:gap-[55px] absolute  left-[50%] transform translate-x-[-50%] lg:translate-x-0 duration-300 z-50   ${
              dDown ? "top-14" : "top-[-590px]"
            }  w-[94%] lg:w-fit   lg:static `}>
                        <li><a href="#Des" className=" font-Poppins font-medium text-[20px] lg:text-[17px] text-[#212832] hover:text-[#DF6951] duration-300 ">Desitnations</a></li>
                       
                        <li><a className=" font-Poppins font-medium text-[20px] lg:text-[17px] text-[#212832]  hover:text-[#DF6951] duration-300 " href="#Bookyour">Hotels</a></li>
                        <li><a className=" font-Poppins font-medium text-[20px] lg:text-[17px] text-[#212832]  hover:text-[#DF6951] duration-300" href="#Flight">Flights</a></li>
                        <li><a className=" font-Poppins font-medium text-[20px] lg:text-[17px] text-[#212832]  hover:text-[#DF6951] duration-300" href="#Booking">Bookings</a></li>
                        <li className=" flex justify-center items-center font-Poppins font-medium  text-[#212832] lg:py-[9px] lg:px-5 lg:border border-[#212832] rounded-[5px] cursor-pointer lg:ml-0 ml-9  hover:text-[#DF6951] duration-300 gap-1 lg:gap-0 text-[20px] lg:text-[17px] ">
                            <button className=" cursor-pointer ">Sign </button>
                            <span >up</span>
                            </li>
                      
                    </ul>
                </div>
            </Flex>
                <div
          className=" lg:hidden absolute top-7 right-7"
          onClick={handleClick}
        >
          {dDown?<MdRestaurantMenu className="w-5 h-5 " />
:<TiThMenuOutline className="w-5 h-5 "/>}
        
        </div>
        </Container>
    </nav>
  )
}

export default Navber