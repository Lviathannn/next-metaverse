"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyle }) => (
   <motion.p
      variants={textContainer}
      className={`${styles.textStyle} font-normal text-[14px] text-secondary-white ${textStyle}`}
   >
      {Array.from(title).map((item, index) => (
         <motion.span variants={textVariant2} key={index}>
            {item === " " ? "\u00A0" : item}
         </motion.span>
      ))}
   </motion.p>
);

export const TitleText = ({ title, textStyle }) => (
   <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`${textStyle} mt-[8px] font-bold md:text-[64px] text-[40px] text-white z-10`}
   >
      {title}
   </motion.h2>
);
