import Rceimg from "../src/assets/Rectangle.png"
import Flex from './Components/Flex';
import Leaf from "../src/assets/LEAF.png"
import Map from "../src/assets/map icon.png"
import Point from "../src/assets/send.png"
import { BsFillBuildingsFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";



function Bookcard() {
  return (
    <div className=" py-5 px-6  rounded-[26px] shadow-2xl h-[400px]">
        <img src={Rceimg} alt="" />
          <p className=" mt-6 font-Poppins text-left font-medium text-[18px] text-black ">
         Trip To Greece
        </p>
        <p className=" mt-43font-Poppins font-normal text-[16px] text-[#5E6282] ">14-29 June <span> by Robbin joseph</span></p>
        <Flex className={`items-center mt-5 gap-[18px]`}>
            <img src={Leaf} alt="" />
            <img src={Map} alt="" />
            <img src={Point} alt="" />
           
        </Flex>
        <Flex className={` items-center justify-between mt-[28px]`}>
            <div className=" flex items-center gap-4">

            <BsFillBuildingsFill />
            <p>24 people going</p>
            </div>
            <GiSelfLove />

        </Flex>
    </div>
  )
}

export default Bookcard