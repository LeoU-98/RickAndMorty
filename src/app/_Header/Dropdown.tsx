"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import NavList from "./NavList";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-2 w-fit lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 rounded bg-gradient-to-r from-slate-800 to-slate-600 px-3 py-2"
      >
        {isOpen ? (
          <HiXMark className="size-5" />
        ) : (
          <FaListUl className="size-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg- absolute left-0 z-50 mt-2 flex w-screen flex-col gap-5 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-600 p-5"
          >
            <NavList />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
