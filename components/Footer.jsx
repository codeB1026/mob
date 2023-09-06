'use client';


import { motion } from "framer-motion"
import { staggerContainer, textVariant, slideIn, zoomIn, fadeIn } from "../utils/motion"
import styles from "../styles"
import Logo from '../components/Logo'
import Social from "./Social";

const Footer = () => (
  <footer  className={`${styles.topPaddings} w-full h-full relative  ${styles.flexStart} `}>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView='show'
     viewport={{once:false , amount:0.25}}
     className="w-full h-auto bg-gradient-to-r from-fuchsia-900 via-purple-900 to-gray-900 pt-8 gap-4"
    >
      <motion.div
       variants={fadeIn('down', 'tween', 0.2, 1)}
       className={` flex flex-col items-center justify-center gap-8`}
      > 
        <Logo />
        <p className="text-text text-center ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit amet, aliquam ipsum maiores blanditiis reiciendis delectus libero quaerat animi suscipit!</p>
        <Social />
      </motion.div>

      <motion.div
       variants={fadeIn('down', 'tween', 0.2, 1)}
       className={` flex flex-col items-center justify-center gap-8`}
      > 
        <p className="opacity-60 text-text text-sm pt-6 pb-2">Copyright codeB 2023 - All Rights Reserved</p>
      </motion.div>
     </motion.div>       
  </footer>
);

export default Footer;
