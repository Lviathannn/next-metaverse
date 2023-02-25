"use client";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";

const Hero = () => (
   <section className={`${style.yPaddings} pl-6 text-white sm:pl-16`}>
      <motion.div
         className={`${style.innerWidth} mx-auto flex flex-col`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.h1
               variants={textVariant(1.1)}
               className={style.heroHeading}
            >
               Metavers
            </motion.h1>
            <motion.div
               variants={textVariant(1.2)}
               className="flex flex-row items-center justify-center"
            >
               <h1 className={style.heroHeading}>Ma</h1>
               <h1 className={style.heroDText} />
               <h1 className={style.heroHeading}>ness</h1>
            </motion.div>
         </div>
         <motion.div
            variants={slideIn("right", "tween", 0, 2, 1)}
            className="relative -mt-[12px] w-full md:-mt-[20px]"
         >
            <div className="hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px] rounded-tr-[20px]" />
            <img
               src="/cover.png"
               alt="cover"
               className="relative z-10 h-[350px] w-full rounded-b-[20px] rounded-tl-[140px] object-cover sm:h-[500px]"
            />
            <a href="#explore">
               <div className="relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]">
                  <img
                     src="/stamp.png"
                     alt="stamp"
                     className="g-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
                  />
               </div>
            </a>
         </motion.div>
      </motion.div>
   </section>
);

export default Hero;
