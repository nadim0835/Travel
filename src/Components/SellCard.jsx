import Buildimg from "../assets/building.png";
import Flex from "./Flex";
import mouse from "../assets/navigation 1.png";
const SellCard = ({src,loca,price,days}) => {
  return (
    <div className=" w-[315px] hover:shadow-2xl shadow-2xs duration-300 rounded-[24px] ">
      <img className="  " src={src} alt="" />
      <Flex className={` justify-center gap-[100px] items-center mt-[27px]`}>
        <p className=" font-Poppins text-[18px] font-medium text-[#5E6282] ">
         {loca}
        </p>
        <h6 className=" font-Poppins text-[18px] font-medium text-[#5E6282] ">
          {price}
        </h6>
      </Flex>
      <Flex className={`items-center ml-5 gap-[14px] mt-5 pb-[42px] `}>
        <img src={mouse} alt="img" />
        <p className=" font-Poppins text-[16px] font-medium text-[#5E6282] ">
          {days}
        </p>
      </Flex>
    </div>
  );
};

export default SellCard;
