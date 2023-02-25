"use client";
import { Footer, Navbar } from "../components";
import { motion } from "framer-motion";
import {
   About,
   Explore,
   Feedback,
   GetStarted,
   Hero,
   Insights,
   WhatsNew,
   World,
} from "../sections";
import { fadeIn, staggerContainer } from "../utils/motion";

const Page = () => (
   <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative ">
         <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
         >
            <About />
            <motion.div
               className="gradient-03 z-0"
               variants={fadeIn("left", "tween", 0, 1)}
            />
         </motion.div>
         <Explore />
      </div>
      <div className="relative">
         <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
         >
            <GetStarted />
            <WhatsNew />
            <motion.div
               className="gradient-04 z-0"
               variants={fadeIn("left", "tween", 0, 1)}
            />
         </motion.div>
      </div>
      <World />
      <div className="relative">
         <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
         >
            <Insights />
            <Feedback />
            <motion.div
               className="gradient-04 z-0"
               variants={fadeIn("left", "tween", 0, 1)}
            />
         </motion.div>
      </div>
      <Footer />
   </div>
);

export default Page;
