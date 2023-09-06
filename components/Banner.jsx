"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "../utils/motion"
import styles from "../styles"

const Banner = () => {
  return (
    <div className={`${styles.topPaddings} w-full h-full relative grid grid-cols-1 items-center justify-center `}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full"
            >
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false , amount:0.25}}
                    className={`${styles.flexBetween} flex-col w-full  bg-red-400 py-8 px-4 gap-6 rounded-xl md:px-8 lg:flex-row`} >
                      <h1 className="text-text font-bold text-2xl text-center lg:text-start">Send us a message via our live chat box</h1>
                      <button className={`${styles.secondaryBtn}`}>Try free</button>
                 </motion.div>   
            </motion.div>    
    </div>            
  )
}

export default Banner