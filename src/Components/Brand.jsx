import { motion } from "framer-motion";
import brand1 from "/src/assets/images/brand1.png";
import brand2 from "/src/assets/images/brand2.png";
import brand3 from "/src/assets/images/brand3.png";
import brand4 from "/src/assets/images/brand4.png";
import brand5 from "/src/assets/images/brand5.png";
const Brand = () => {
  const iconFotos = [
    brand1,brand2,brand3,brand4,brand5
  ];
  const iconVariant = {
    hidden: {
      x: "0%",
    },
    visible: {
      x: ["-20%", "20%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <div>
        <motion.div
          className="flex justify-center items-center gap-10 w-screen mt-20 md:mb-14"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
        >
          {iconFotos.map((fotos) => (
            <img src={fotos} alt="website logos" />
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default Brand;
