import Container from "./Components/Container";
import Footerimg from "../src/assets/foter.png";
import Flex from "./Components/Flex";
import fecebook from "../src/assets/Social.png"
import Insta from "../src/assets/Social (1).png"
import Twiter from "../src/assets/Social (2).png"

import palystore from "../src/assets/Play Store.png"
import Gpalystore from "../src/assets/Google Play.png"

function Footer() {
  return (
    <div>
      <footer className=" mt-[80px]">
        <Container>
          <Flex className={` ml-[25px] md:items-start flex-wrap gap-5  justify-center flex-col md:flex-row`}>
            <div className=" md:w-[20%] w-[70%] ">
              <img src={Footerimg} alt="" />
              <p className=" font-Poppins md:text-[13px] text-8 text-[#5E6282] mt-[19px]">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>
            <div className="md:w-[17%] w-[70%] ">
              <h3 className=" font-bold font-Poppins text-black text-[35px] md:text-[21px] ">
                Company
              </h3>
              <ul>
                <li className="text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] font-medium  ">
               About
                </li>
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
                Careers
                </li>
              
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
                  Mobile
                </li>
              
              </ul>
            </div>
             <div className="md:w-[17%] w-[70%] ">
              <h3 className=" font-bold font-Poppins text-black text-[35px] md:text-[21px] ">
              Contact
              </h3>
              <ul>
                <li className="text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] font-medium  ">
                Help/FAQ
                </li>
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
                Press
                </li>
              
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
                  About
                </li>
              
              </ul>
            </div>
             <div className="md:w-[17%] w-[70%] ">
              <h3 className=" font-bold font-Poppins text-black text-[35px] md:text-[21px] ">
             More
              </h3>
              <ul>
                <li className="text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] font-medium  ">
                Airlinefees
                </li>
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
              Airline
                </li>
              
                <li className=" text-[22px]  md:text-[18px] font-Poppins text-[#5E6282] mt-1 md:mt-3 font-medium  ">
                  Low fare tips
                </li>
              
              </ul>
            </div>
            <div className="">
                <h3 className=" font-bold font-Poppins text-black text-[35px] md:text-[21px] ">
               Social
              </h3>
                <Flex className={` cursor-pointer justify-start items-start`}>
                    <img className=" hover:ring-2 rounded-[25px] duration-200"  src={fecebook} alt="" />
                    <img className=" hover:ring-2 rounded-[25px] duration-200"  src={Insta} alt="" />
                    <img className=" hover:ring-2 rounded-[25px] duration-200"  src={Twiter} alt="" />
                </Flex>
                <Flex className={` md:flex hidden justify-start gap-2 items-start mt-4`}>
                    <img src={Gpalystore} alt="" />
                    <img src={palystore} alt="" />
                    
                </Flex>
            </div>
          </Flex>
                <p className=" md:ml-3 mt-10 md:mt-[74px] mb-[70px] text-center text-[14px] md:text-[18px] font-Poppins text-[#5E6282] font-medium  ">
                All rights reserved@jadoo.com
                </p>
          
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
