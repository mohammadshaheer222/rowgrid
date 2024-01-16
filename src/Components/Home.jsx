import { motion } from "framer-motion";
import Brand from "./Brand";
import rowgridImage from '/src/assets/images/rowgrid.png';
import web1Image from '/src/assets/images/web1.jpg';
import web4Image from '/src/assets/images/web4.png';
const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col h-screen relative">
          <div className="flex items-center justify-center">
            <img
              className="w-screen"
              src={rowgridImage}
              alt=""
            />
          </div>
          <div className="h-96 ">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -5 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
              }}
              className="absolute w-52 h-36 top-[10%] left-[0%] sm:top-[15%] md:left-[40%] md:top-[15%] md:w-80 md:h-44 lg:top-[30%] "
              src={web1Image}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 1.5,
              }}
              className="hidden md:block md:absolute w-[50%] h-60 right-[90%] top-40 md:top-60"
              src={web1Image}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 10 }}
              transition={{
                delay: 0.7,
                duration: 1.5,
              }}
              className="absolute w-60 h-36 right-[0%] top-72 "
              src={web4Image}
              alt=""
            />
          </div>
          <Brand />
        </div>
      </div>
    </>
  );
};
export default Home;
