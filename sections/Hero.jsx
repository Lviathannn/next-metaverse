"use client";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";

const Hero = () => (
   <section className={`${style.yPaddings} sm:pl-16 pl-6 text-white`}>
      <motion.div
         className={`${style.innerWidth} mx-auto flex flex-col`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1
               variants={textVariant(1.1)}
               className={style.heroHeading}
            >
               Metavers
            </motion.h1>
            <motion.div
               variants={textVariant(1.2)}
               className="flex flex-row justify-center items-center"
            >
               <h1 className={style.heroHeading}>Ma</h1>
               <h1 className={style.heroDText} />
               <h1 className={style.heroHeading}>ness</h1>
            </motion.div>
         </div>
         <motion.div
            variants={slideIn("right", "tween", 0, 2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
         >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
            <img
               src="/cover.png"
               alt="cover"
               className="object-cover w-full sm:h-[500px] h-[30px] z-10 relative rounded-tl-[140px]"
            />
            <a href="#explore">
               <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                  <img
                     src="/stamp.png"
                     alt="stamp"
                     className="sm:w-[155px] w-[100px] sm:h-[155px] g-[100px] object-contain"
                  />
               </div>
            </a>
         </motion.div>
      </motion.div>
   </section>
);

export default Hero;
