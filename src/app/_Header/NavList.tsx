"use client";

import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navIconVariants = {
  normal: {
    scale: 1,
  },
  hovered: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function NavList() {
  const pathName = usePathname();
  return (
    <>
      <motion.li
        variants={navIconVariants}
        initial="normal"
        whileHover="hovered"
      >
        <Link
          prefetch={false}
          href={"/"}
          className={`flex items-center justify-center gap-1 rounded-full bg-black px-4 py-2 text-base text-white duration-300 hover:bg-white hover:text-black md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base ${pathName === "/" && "bg-white !text-black"} `}
        >
          <FaHome className="size-6 md:size-4 lg:size-6" />
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={navIconVariants}
        initial="normal"
        whileHover="hovered"
      >
        <Link
          prefetch={false}
          href={"/Home/character"}
          className={`flex items-center justify-center gap-1 rounded-full bg-black px-4 py-2 text-base text-white duration-300 hover:bg-white hover:text-black md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base ${pathName === "/Home/character" && "bg-white !text-black"}`}
        >
          <BsFillPersonVcardFill className="size-6 md:size-4 lg:size-6" />
          Characters
        </Link>
      </motion.li>
      <motion.li
        variants={navIconVariants}
        initial="normal"
        whileHover="hovered"
      >
        <Link
          prefetch={false}
          href={"/Home/location"}
          className={`flex items-center justify-center gap-1 rounded-full bg-black px-4 py-2 text-base text-white duration-300 hover:bg-white hover:text-black md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base ${pathName === "/Home/location" && "bg-white !text-black"} `}
        >
          <IoLocationOutline className="size-6 md:size-4 lg:size-6" />
          Locations
        </Link>
      </motion.li>
      <motion.li
        variants={navIconVariants}
        initial="normal"
        whileHover="hovered"
      >
        <Link
          prefetch={false}
          href={"/Home/episode"}
          className={`flex items-center justify-center gap-1 rounded-full bg-black px-4 py-2 text-base text-white duration-300 hover:bg-white hover:text-black md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-base ${pathName === "/Home/episode" && "bg-white !text-black"} `}
        >
          <MdLocalMovies className="size-6 md:size-4 lg:size-6" />
          Episodes
        </Link>
      </motion.li>
    </>
  );
}

export default NavList;
