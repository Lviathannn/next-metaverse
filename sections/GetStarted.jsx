"use client";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { StartSteps, TypingText, TitleText } from "../components";
import { useState } from "react";
import { startingFeatures } from "../constants";

const GetStarted = () => (
   <section className={`${style.paddings} relative z-10`}>
      <motion.div
         className={`${style.innerWidth} lg:flex-row flex-col mx-auto flex gap-8`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <motion.div
            className={`flex-1 ${style.flexCenter}`}
            variants={planetVariants("left")}
         >
            <img
               src="/get-started.png"
               alt="get-started"
               className="w-[90%] h-[90%] object-contain"
            />
         </motion.div>
         <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
         >
            <TypingText title="| How Metaversus Work" />
            <TitleText title={<>Get Started With a Few Clicks</>} />
            <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
               {startingFeatures.map((feature, index) => {
                  return (
                     <StartSteps
                        key={feature}
                        number={index + 1}
                        text={feature}
                     />
                  );
               })}
            </div>
         </motion.div>
      </motion.div>
   </section>
);

export default GetStarted;
