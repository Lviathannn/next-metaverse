"use client";
import { fadeIn, staggerContainer } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { TypingText } from "../components";

const About = () => (
   <section className={`${style.paddings} relative z-10 `}>
      <div className="gradient-02 z-0" />
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className={`${style.innerWidth} mx-auto ${style.flexCenter} flex-col`}
      >
         <TypingText title="| About Metaversus" textStyle="text-center" />
         <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
         >
            <span className="font-extrabold text-white">Metaverse</span> is a
            new thing in the future, where you can enjoy the virtual world by
            feeling like it's really real, you can feel what you feel in this
            metaverse world, because this is really the{" "}
            <span className="font-extrabold text-white">
               madness of the metaverse
            </span>{" "}
            of today, using only{" "}
            <span className="font-extrabold text-white"> VR</span> devices you
            can easily explore the metaverse world you want, turn your dreams
            into reality. Let's explore the madness of the metaverse by
            scrolling down
         </motion.p>
      </motion.div>
   </section>
);

export default About;
