"use client";
import { motion } from "motion/react";
import Link from "next/link";

const notFoundPageVariants = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const homeBtnVariants = {
  normal: {
    scale: 1,
  },
  hovered: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={notFoundPageVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto mt-5 flex h-[30rem] items-center justify-center overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-r from-slate-900 to-slate-800 md:h-[45rem]"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="bg-[url(/oops-bg.jpg)] bg-cover bg-clip-text text-[7rem] font-extrabold text-transparent md:text-[15rem]">
          Opps!
        </p>
        <p className="text-2xl md:text-5xl">404- Page Not Found</p>

        <motion.button
          variants={homeBtnVariants}
          initial="normal"
          whileHover="hovered"
        >
          <Link
            href="/"
            className="block w-fit rounded-full bg-[url(/home-btn.jpg)] bg-cover px-5 py-2 text-white antialiased"
          >
            Go Home
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}
