"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyle }) => (
   <motion.p
      variants={textContainer}
      className={`${styles.textStyle} font-normal text-[14px] text-secondary-white`}
   >
      {Array.from(title).map((item, index) => (
         <motion.span variants={textVariant2} key={index}>
            {item === " " ? "\u00A0" : item}
         </motion.span>
      ))}
   </motion.p>
);

export const TitleText = () => <h2>Title Text</h2>;
