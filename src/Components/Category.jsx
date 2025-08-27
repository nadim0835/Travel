import CategoryCard from "./CategoryCard";
import Container from "./Container";
import Flex from "./Flex";
import antena from "../assets/Card.png";
import plane from "../assets/plane.png";
import mike from "../assets/mike.png";
import seting from "../assets/seting.png";

function Category() {
  return (
    <section className=" mt-[40px] md:mt-[70px] lg:mt-[105px]">
      <Container>
        <p className=" font-Poppins text-center  font-semibold text-[18px] text-[#5E6282] ">CATEGORY</p>
        <h5 className=" text-[#14183E] text-[50px] font-Volkhov font-bold text-center">We Offer Best Services</h5>
        <Flex className={` items-center flex-col gap-5 md:gap-0 justify-center lg:justify-between  flex-wrap md:flex-row `}>
          <CategoryCard
            src={antena}
            hData={`Calculated Weather`}
            pData={`Built Wicket longer admire do barton vanity itself do in it.`}
          />
          <CategoryCard
        
            src={plane}
            hData={`Best Flights`}
            pData={`Engrossed listening. Park gate sell they west hard for the.`}
          />
          <CategoryCard
            src={mike}
            hData={`Local Events`}
            pData={`Barton vanity itself do in it. Preferd to men it engrossed listening. `}
          />
          <CategoryCard
            src={seting}
            hData={`Customization`}
            pData={`We deliver outsourced
aviation services for
military customers`}
          />
        </Flex>
      </Container>
    </section>
  );
}

export default Category;
