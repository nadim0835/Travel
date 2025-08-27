import Container from "./Container";
import SellCard from "./SellCard";
import Buliding from "../assets/building.png"
import Clock from "../assets/clock.png"
import Moskov from "../assets/mosko.png"
import Dos from "../assets/Decore.png"
import Flex from "./Flex";

const Topsell = () => {
  return (
    <section id="Des">
      <Container>
        <p className=" font-Poppins text-center  font-semibold text-[18px] text-[#5E6282] ">
          Top Selling
        </p>
        <h5 className=" text-[#14183E] text-[50px] font-Volkhov font-bold text-center">
          Top Destinations
        </h5>
        <Flex className={` lg:justify-between justify-center gap-10 items-center mt-[60px] flex-wrap`}>
            <SellCard src={Buliding} loca={`Rome, Italty`} price={`$5,42k`} days={`10 Days Trip`}/>
            <SellCard src={Clock} loca={`Rome, Italty`} price={`$5,42k`} days={`10 Days Trip`}/>
            <div className=" relative z-10">

            <SellCard src={Moskov} loca={`Rome, Italty`} price={`$5,42k`} days={`10 Days Trip`}/>
            <img className=" lg:absolute hidden  lg:inline-block top-[157px] right-[-65px] -z-10 " src={Dos} alt="" />
            </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Topsell;
