import Container from "./Container";
import Flex from "./Flex";
import { FaRegCirclePlay } from "react-icons/fa6";
import Heroimg from "../assets/Image.png";
import Hgimg from "../assets/Decore.png"


const Hero = () => {
  return (
    <>
      <section id="hero" className=" pt-[58px] lg:px-0 px-4 ">
        <Container>
          <div className="">

          <Flex className={` justify-between items-center lg:flex-row flex-col mt-8 md:mt-2 lg:mt-0 `}>
            <div className="">
              <h5 className=" text-5 font-Poppins mt-5 lg:mt-0 font-bold text-[#DF6951]">Best Destinations around the world</h5>
              <h1 className=" font-Volkhov font-bold leading-[69px] mt-6   traking-[-4%] text-[#181E4B] text-[69px]  ">Travel, enjoy and live a new and full life</h1>
              <p className=" lg:text-[16px] text-[20px] mt-3 lg:mt-[30px] mb-3 lg:mb-0 leading-[30px] font-medium text-[#5E6282] font-Poppins  ">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
              <div className=" flex items-center mb-4 mt-[34px]  gap-[6%] lg:gap-[44px] ">
                <button className=" text-[18px] font-medium py-[19px] px-[27px] bg-[#F1A501] hover:bg-white
                 hover:text-[#F1A501] duration-300 hover:border-[#F1A501] border text-white rounded-[10px]  ">Find out</button>
               
                    <FaRegCirclePlay className=" bg-[#DF6951] text-white hover:h-[52px] hover:w-[52px] h-[40px] w-[40px] cursor-pointer ring-blue-300 duration-300 rounded-[50%]   " />
                    <p className=" text-[#686D77] font-medium font-Poppins text-[17px]  ">Play Demo</p>

                
              </div>
            </div>
            <div className=" mt-3 lg:order-none  order-first ">
            <img className=" lg:max-w-fit" src={Heroimg} alt="" />
            </div>
          </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
