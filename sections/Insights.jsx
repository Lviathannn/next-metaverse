"use client";
import { staggerContainer } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { InsightCard, TypingText, TitleText } from "../components";
import { insights } from "../constants";

const Insights = () => (
   <section className={`${style.paddings} relative z-10`}>
      <motion.div
         className={`${style.innerWidth} flex-col mx-auto flex`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <TypingText title="| Insight" textStyle="text-center" />
         <TitleText title="Insight about metaverse" textStyle="text-center" />
         <div className="mt-[50px] flex flex-col gap-[30px]">
            {insights.map((insight, index) => (
               <InsightCard key={index} {...insight} index={index + 1} />
            ))}
         </div>
      </motion.div>
   </section>
);

export default Insights;
