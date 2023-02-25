"use client";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { NewFeatures, TypingText, TitleText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
   <section className={`${style.paddings} relative z-10`}>
      <motion.div
         className={`${style.innerWidth} lg:flex-row flex-col mx-auto flex gap-8`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
         >
            <TypingText title="| Whats New" />
            <TitleText title={<>Whats New About Metaversus</>} />
            <div className="mt-[31px] flex flex-wrap justify-between gap-[24px]">
               {newFeatures.map((feature) => {
                  return <NewFeatures key={feature.title} {...feature} />;
               })}
            </div>
         </motion.div>
         <motion.div
            className={`flex-1 ${style.flexCenter}`}
            variants={planetVariants("right")}
         >
            <img
               src="/whats-new.png"
               alt="whats-news"
               className="w-[90%] h-[90%] object-contain"
            />
         </motion.div>
      </motion.div>
   </section>
);

export default WhatsNew;
