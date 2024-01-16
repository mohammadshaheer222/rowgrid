import { motion } from "framer-motion";
import Brand from "./Brand";
import "/src/App.css";
const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col h-screen relative">
          <div className="flex items-center justify-center">
            <img
              className="w-screen"
              src="/src/assets/images/rowgrid.png"
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
              src="/src/assets/images/web1.jpg"
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
              src="/src/assets/images/web1.jpg"
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
              src="/src/assets/images/web4.png"
              alt=""
            />
          </div>
          {/* <Brand /> */}
        </div>
      </div>
    </>
  );
};
export default Home;
