"use client";
import { staggerContainer } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { ExploreCard, TypingText, TitleText } from "../components";
import { useState } from "react";
import { exploreWorlds } from "../constants";

const Explore = () => {
   const [active, setActive] = useState("world-2");

   return (
      <section className={`${style.paddings}`} id="explore">
         <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${style.innerWidth} mx-auto flex flex-col`}
         >
            <TypingText title="| The World" textStyle="text-center" />
            <TitleText
               title={
                  <>
                     Choose The World You Want{" "}
                     <br className="lg:block hidden" />
                     To Explore
                  </>
               }
               textStyle="text-center"
            />
            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[75vh] gap-5">
               {exploreWorlds.map((world, index) => (
                  <ExploreCard
                     key={world.id}
                     index={index}
                     {...world}
                     active={active}
                     handleClick={setActive}
                  />
               ))}
            </div>
         </motion.div>
      </section>
   );
};

export default Explore;
