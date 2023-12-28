import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const PlaceCard = ({ imgUrl, title, description }) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="cursor-pointer transition-all">
      <div
        ref={ref}
        className="h-48 md:h-64 rounded-xl relative group bg-paleta-blue-500 "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="relative  bg-[#012e47c9] rounded-xl w-full h-full top-0 left-0 "
        >
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isHover ? "animate" : "initial"}
            whileTap={isHover ? "animate" : "initial"}
            transition={{ duration: 0.4 }}
            className="text-xl px-2 absolute bottom-10"
          >
            <h4 className="text-paleta-bond-200 font-medium">{title}</h4>
            <p className="text-paleta-bond-200 text-base">{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlaceCard;
