"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button.jsx";
import { fadeIn } from "../../utils/motion.js";

export const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 1.5)}
    className={`relative ${
      active === id ? "flex-[10]" : "flex-[2]"
    } flex items-center justify-center min-w-44 h-[700px] ease-out duration-300 overflow-hidden cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="method"
      className="absolute w-full h-full object-cover rounded-xl"
    />
    {active !== id ? (
      <h3 className="absolute w-full font-semibold text-lg p-8 md:p-0 md:mb-20 md:text-3xl md:bottom-6 md:rotate-[-90deg] md:origin-[0,0] text-white ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 w-full bg-[rgba(0,0,0,0.5)] rounded-b-xl">
        <Button className="max-w-24">View</Button>
        <h2 className="mt-2 font-semibold text-3xl text-white">{title}</h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
