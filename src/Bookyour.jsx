import React from "react";
import Container from "./Components/Container";
import Flex from "./Components/Flex";
import For from "../src/assets/for.png";
import Car from "../src/assets/car.png";
import Payment from "../src/assets/payment.png";
import Bookcard from "./Bookcard";

const Bookyour = () => {
  return (
    <section className=" lg:mt-[100px] mt-10 pl-0 md:pl-[30px] ">
      <Container>
        
        <Flex className={`  justify-center items-center lg:gap-[118px] flex-col lg:flex-row `}>
          <div className=" ">
              <p className=" font-Poppins text-center md:text-start   font-semibold text-[18px] text-[#5E6282] ">
         Easy and Fast
        </p>
            <h1 className="  text-center md:text-start   font-Volkhov font-bold text-[#14183E] md:text-[50px] text-[30px] ">Book your next trip </h1>
            <h1 className=" text-center md:text-start  font-Volkhov font-bold text-[#14183E] md:text-[50px] text-[30px] "> in 3 easy steps</h1>
            <div className="mt-[29px] mb-[48px] ml-20px md:w-[395px] w-auto ">
              <Flex className={` lg:mb-[48px] mb-6 items-center gap-3  md:gap-5 md:flex-row flex-col `}>
                <img src={For} alt="" />
                <div className=" md:pl-0 pl-6">
                  <h5 className=" font-Poppins font-bold text-[16px] text-[#5E6282] ">Choose Destination</h5>
                  <p  className=" font-Poppins font-normal text-[16px] text-[#5E6282] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </Flex>
              <Flex className={` lg:mb-[48px] mb-6 items-center gap-3  md:gap-5 md:flex-row flex-col `}>
                <img src={Payment} alt="" />
                <div className="md:pl-0 pl-6">
                  <h5 className=" font-Poppins font-bold text-[16px] text-[#5E6282] ">Make Payment</h5>
                  <p  className=" font-Poppins font-normal text-[16px] text-[#5E6282] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </Flex>
              <Flex className={`  lg:mb-[48px] mb-6 items-center gap-3  md:gap-5 md:flex-row flex-col `}>
                <img src={Car} alt="" />
                <div className=" md:pl-0 pl-6">
                  <h5 className=" font-Poppins font-bold text-[16px] text-[#5E6282] ">Reach Airport on Selected Date</h5>
                  <p  className=" font-Poppins font-normal text-[16px] text-[#5E6282] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </Flex>
            </div>
           
          </div>
          <Bookcard/>
        </Flex>
      </Container>
    </section>
  );
};

export default Bookyour;
