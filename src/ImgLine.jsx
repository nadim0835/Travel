import Container from "./Components/Container"
import Flex from "./Components/Flex"
import Imgone from "../src/assets/imgone.png"
import Imgtwo from "../src/assets/imgtwo.png"
import Imgthree from "../src/assets/imgthree.png"
import Imgfour from "../src/assets/imgfour.png"
import Imgfive from "../src/assets/imgfive.png"


const ImgLine = () => {
  return (
    <section id="Flight">
        <Container>
            <Flex className={` items-center flex-wrap justify-between`}>
                <img className=" p-4 cursor-pointer duration-300 rounded-2xl  hover:bg-white hover:shadow-2xl" src={Imgone} alt="img" />
                <img  className="p-4 cursor-pointer duration-300 rounded-2xl  hover:bg-white hover:shadow-2xl" src={Imgtwo} alt="img" />
                <img  className="p-4 cursor-pointer duration-300 rounded-2xl  hover:bg-white hover:shadow-2xl" src={Imgthree} alt="img" />
                 <img  className="p-4 cursor-pointer duration-300 rounded-2xl  hover:bg-white hover:shadow-2xl" src={Imgone} alt="img" />
                 <img  className="p-4 cursor-pointer duration-300 rounded-2xl  hover:bg-white hover:shadow-2xl" src={Imgtwo} alt="img" />
            </Flex>
        </Container>

    </section>
  )
}

export default ImgLine