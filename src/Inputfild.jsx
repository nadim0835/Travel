import Container from "./Components/Container";
import { IoMdMail } from "react-icons/io";

function Inputfild() {
  return (
    <section className=" text-[#DFD7F9]  mt-[40px] lg:mt-[70px]">
      <Container>
        <h2 className=" text-center lg:pt-[50px] pt-[30px]    font-Poppins font-semibold text-[33px] text-[#5E6282] ">
          Subscribe to get information, latest news and other
        </h2>
        <h2 className="  text-center md:pb-[74px] pb-[30px]   font-Poppins font-semibold text-[33px] text-[#5E6282] ">
          interesting offers about Jadoo
        </h2>
        <div className="   flex justify-center gap-6 md:flex-row flex-col items-center ">
          <div className=" relative h-[68px]  w-[300px] md:w-[421px] shadow-2xl rounded-[10px] ">
            <input
              placeholder="Your email"
              className=" absolute top-0 left-0 w-full h-full   bg-transparent text-center placeholder:text-[#39425D] 
             md:placeholder:ml-[130px] placeholder:ml-[80px] placeholder:font-Poppins placeholder:font-normal placeholder:text-[14px] "
              type="text"
            />
            <IoMdMail className=" h-5 w-5 mt-[25px] ml-[31px] text-[#39425D] " />
          </div>
          <button
            className=" font-Poppins font-semibold text-white py-4 px-[30px] text-[17px] md:py-[22px] md:px-[50px]
             bg-[#FF7D68] hover:border-amber-400 border-[3px] cursor-pointer duration-300 shadow rounded-[10px] "
          >
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Inputfild;
