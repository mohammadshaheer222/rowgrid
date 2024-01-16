import { motion } from "framer-motion";
const Brand = () => {
  const iconFotos = [
    "/src/assets/images/brand1.png",
    "/src/assets/images/brand2.png",
    "/src/assets/images/brand3.png",
    "/src/assets/images/brand4.png",
    "/src/assets/images/brand5.png",
  ];
  const iconVariant = {
    hidden: {
      x: "0%",
    },
    visible: {
      x: ["-50%", "50%"],
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
          className="flex justify-center items-center gap-10 w-screen mt-10 md:mb-14"
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
