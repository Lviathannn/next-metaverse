"use client";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";

const Feedback = () => (
   <section className={`${style.paddings} relative z-10`}>
      <motion.div
         className={`${style.innerWidth} mx-auto flex flex-col gap-6 lg:flex-row`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <motion.di
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-[32px] border-[1px] border-[#6A6A6A] p-4 sm:p-8 lg:max-w-[370px]"
         >
            <div className="feedback-gradient" />
            <div className="">
               <h4 className="text-[26px] font-bold text-white sm:text-[32px] sm:leading-[40px]">
                  Samantha
               </h4>
               <p className="mt-[8px] text-[12px] font-normal leading-[16px] text-white sm:text-[18px] sm:leading-[22px]">
                  Founder Metaverus
               </p>
               <p className="mt-[24px] text-[18px] font-normal leading-[36px] text-white sm:text-[24px] sm:leading-[45px]">
                  “With the development of today's technology, metaverse is very
                  useful for today's work, or can be called web 3.0. by using
                  metaverse you can use it as anything”
               </p>
            </div>
         </motion.di>
         <motion.div
            variants={fadeIn("left", "tweem", 0.2, 1)}
            className="items-centers relative flex flex-1 justify-center"
         >
            <img
               src="/planet-09.png"
               alt="planet"
               className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
            />
            <motion.div
               variants={zoomIn(0.4, 1)}
               className="absolute -left-[10%] top-[3px] hidden lg:block"
            >
               <img
                  src="/stamp.png"
                  alt="stamp"
                  className="h-[155px] w-[155px]"
               />
            </motion.div>
         </motion.div>
      </motion.div>
   </section>
);

export default Feedback;
