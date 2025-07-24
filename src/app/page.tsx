"use client";
import { motion } from "motion/react";
const homePageVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={homePageVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto mt-5 flex h-[740px] overflow-hidden rounded-3xl border-2 border-white bg-[url(/home-back.png)] bg-cover"
    ></motion.div>
  );
}
