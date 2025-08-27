import Flex from "./Flex"

const CategoryCard = ({src,pData,hData,classNameImg}) => {
  return (
    <div className={`  hover:shadow-2xl duration-300  rounded-[36px] px-[50px] md:px-[34px] lg:px-[44px] pt-[16px] pb-[45px]`}>
        <Flex className={`flex-col items-center  hover:bg-white 
         `}>
      
            <img className={` ${classNameImg } w-[92px] h-[78px]`} src={src} alt="img" />

        <h3 className=" font-Poppins font-semibold text-[20px] text-[#1E1D4C] mt-[29px]">{hData} </h3>
        <p className=" font-medium font-Poppins text-[16px] text-[#5E6282] w-[181px] mt-[15px] ml-[14px]  leading-[26px]">{pData}</p>
        </Flex>
    
    </div>
  )
}

export default CategoryCard