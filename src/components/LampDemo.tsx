
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";


export function LampDemo() {
  return (
    <>
    <LampContainer>
    <h1 className="text-3xl text-slate-900 font-medium ">Bug Tracking System</h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        "Empower your team: Turn bugs into <br /> opportunities for improvement!"
      </motion.h1>
    </LampContainer>
    </>
  );
}
