"use client";
import { staggerContainer, fadeIn } from "../utils/motion";
import style from "../styles";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
const World = () => (
   <section className={`${style.paddings} relative z-10`}>
      <motion.div
         className={`${style.innerWidth} flex-col mx-auto flex`}
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      >
         <TypingText title="| People On The World" textStyle="text-center" />
         <TitleText
            title={
               <>
                  Track friends around you and invite them to play together in
                  the same world
               </>
            }
            textStyle="text-center"
         />
         <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="relative mt-[68px] flex w-full h-[550px]"
         >
            <img
               src="/map.png"
               alt="map"
               className="w-full h-full object-contain"
            />
            <div className="absolute top-16 right-60 w-[196px] h-[150px] p-2 hidden lg:block bg-white/70 rounded-[24px] shadow-lg shadow-blue-400 ">
               <div className="w-full h-full rounded-[24px] bg-[url('/planet-01.png')] bg-cover bg-bottom p-5">
                  <div className="relative flex mt-14 items-center">
                     <img
                        src="/people-01.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute "
                     />
                     <img
                        src="/people-03.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute left-4"
                     />
                     <img
                        src="/people-02.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute left-8"
                     />
                     <p className="text-[10px] text-white absolute left-16">
                        + 264 has joined
                     </p>
                  </div>
                  <h3 className="font-bold text-white text-[16px] mt-5">
                     The Upside Down
                  </h3>
               </div>
            </div>

            <div className="absolute bottom-28 left-10 w-[196px] h-[150px] p-2 hidden lg:block bg-white/70 rounded-[24px] shadow-lg shadow-indigo-300 ">
               <div className="w-full h-full rounded-[24px] bg-[url('/planet-02.png')] bg-cover bg-bottom p-5">
                  <div className="relative flex mt-14 items-center">
                     <img
                        src="/people-01.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute "
                     />
                     <img
                        src="/people-03.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute left-4"
                     />
                     <img
                        src="/people-02.png"
                        alt="people"
                        className="w-[24px] h-[24px] absolute left-8"
                     />
                     <p className="text-[10px] text-white absolute left-16">
                        + 264 has joined
                     </p>
                  </div>
                  <h3 className="font-bold text-white text-[16px] mt-5">
                     Hawkins Labs
                  </h3>
               </div>
            </div>

            <div className="absolute top-44 left-10 md:left-20 md:top-24 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-lg shadow-orange-200/90">
               <img
                  src="/people-01.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>
            <div className="absolute bottom-44 right-0 md:bottom-40 md:right-10 lg:bottom-28 shadow-lg shadow-red-200/80 lg:right-32 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
               <img
                  src="/people-02.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>
            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-lg shadow-white/80">
               <img
                  src="/people-03.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>
         </motion.div>
      </motion.div>
   </section>
);

export default World;
