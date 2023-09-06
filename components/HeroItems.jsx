"use client"

import { motion } from "framer-motion"
import { staggerContainer, textVariant, slideIn, zoomIn, fadeIn } from "../utils/motion"
import styles from "../styles"
import Image from "next/image"
import { TypingText } from "./CustomTexts"
import {ImStatsDots} from 'react-icons/im'
import {FiTrendingUp} from 'react-icons/fi'
import {BsFillCalendarCheckFill, BsFillLockFill} from 'react-icons/bs'
import {GrShieldSecurity} from 'react-icons/gr'
import {MdSettingsInputComposite} from 'react-icons/md'
import {FaSnowman} from 'react-icons/fa'

export const HeroMain = () => {
    return (
        <div className='w-full h-full relative grid grid-cols-1 items-center justify-center overflow-hidden'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full"
            >
                <motion.h1
                variants={textVariant()}
                className={`text-4xl text-center text-text font-semibold  ${styles.topPaddings}`}
                >
                    Advance to the Next Stage with Booster
                </motion.h1>
                <motion.p
                    variants={textVariant(0.5)}
                    className="text-center text-primary text-md py-6"
                >
                    Elevate your business to new heights by embracing enterprise-level security, speed, and personalization - all at a more affordable cost. Start your free trial now and join our newsletter for exclusive access to special coupons and offers
                </motion.p>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false , amount:0.25}}
                    className={`${styles.flexCenter} w-full`}
                >
                    <input type="text" placeholder="Enter your Email" className="w-[60%] py-4 px-2 text-text rounded-l-lg bg-transparent outline-none focus:none relative border-[1px] border-accent " />
                    <button className={`${styles.primaryBtn}`}>send us</button>
                </motion.div>
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className={`${styles.flexCenter}`}
                >
                    <Image src={'/hero.png'} width={400} height={400}  />
                </motion.div>
            </motion.div>
        </div>
      )
  };

export const HeroServices = () => {

    return(
        <div className={`${styles.topPaddings} w-full h-full relative grid grid-cols-1 items-center justify-center`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full"
            > 
            <TypingText title="| Expert Consultation and Support" textStyles="text-center" className="text-text"/>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false , amount:0.25}}
                className={`${styles.flexCenter} py-4 text-center text-primary text-md ` }
            >
                Unparalleled services suitable for all. No need to search elsewhere.
            </motion.p>
            </motion.div>
            <div className="w-full grid grid-cols-1 place-items-center justify-center gap-6 md:gap-2 md:grid-cols-2">
                <motion.div
                 variants={fadeIn('right', 'tween', 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:false , amount:0.25}}
                 className={`w-full text-text pt-10  h-auto bg-primary px-4 rounded-tl-[50px] rounded-br-[50px] py-6 `}
                >
                   <ImStatsDots className="fill-accent  text-[2rem]"/>
                   <h1 className="text-secondary text-2xl uppercase tracking-wider py-2 font-bold">reports</h1>
                   <p className="text-white text-sm uppercase py-2 pb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam deleniti illo nobis enim fugit.</p>
                </motion.div>

                <motion.div
                 variants={fadeIn('left', 'tween', 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:false , amount:0.25}}
                 className={`w-full text-text pt-10  h-auto bg-primary px-4 rounded-tr-[50px] rounded-bl-[50px] py-6  `}
                >
                   <FiTrendingUp className="fill-accent text-[2rem] "/>
                   <h1 className="text-secondary text-2xl uppercase tracking-wider py-2 font-bold">Marketing</h1>
                   <p className="text-white text-sm uppercase py-2 pb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam deleniti illo nobis enim fugit.</p>
                </motion.div>

                <motion.div
                 variants={fadeIn('right', 'tween', 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:false , amount:0.25}}
                 className={`w-full text-text pt-10  h-auto bg-primary px-4 rounded-tr-[50px] rounded-bl-[50px] py-6 `}
                >
                   <BsFillCalendarCheckFill className="fill-accent  text-[2rem]"/>
                   <h1 className="text-secondary text-2xl uppercase tracking-wider py-2 font-bold">Scheduling</h1>
                   <p className="text-white text-sm uppercase py-2 pb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam deleniti illo nobis enim fugit.</p>
                </motion.div>

                <motion.div
                 variants={fadeIn('left','tween', 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:false , amount:0.25}}
                 className={`w-full text-text pt-10  h-auto bg-primary px-4 rounded-tl-[50px] rounded-br-[50px py-6  `}
                >
                   <GrShieldSecurity className="fill-accent  text-[2rem]"/>
                   <h1 className="text-secondary text-2xl uppercase tracking-wider py-2 font-bold">Security</h1>
                   <p className="text-white text-sm uppercase py-2 pb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam deleniti illo nobis enim fugit.</p>
                </motion.div>

            </div>
        </div>
    )
  }  

export const HeroThird = () => {

    return(
        <div className={`${styles.topPaddings} w-full h-full relative grid grid-cols-1 items-center justify-center `}>
           <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full md:grid md:grid-cols-2 md:gap-6"
            > 
                <motion.div
                   variants={fadeIn('down', 'tween', 0.2, 1)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{once:false , amount:0.25}}
                   className={`${styles.flexCenter} w-full object-fill`}   
                >
                    <div className={`${styles.flexEnd} relative w-full bg-yellow-300 h-auto rounded-t-[50%] p-10 overflow-hidden`} >
                        <Image src={"/hero2.png"} width={400} height={400} className="" />
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('down', 'tween', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false , amount:0.25}}
                    className={`${styles.flexCenter} w-full h-auto flex-col `}
                >
                    <motion.h1
                    variants={textVariant()}
                    className={`text-4xl text-center text-text font-semibold md:text-[1.5rem] lg:text-4xl ${styles.topPaddings}`}
                    >
                        Integrate for Effortless Efficiency: Work Smarter, Not Harder
                    </motion.h1>
                    <motion.p
                        variants={textVariant(0.5)}
                        className="w-full text-center text-primary text-md py-6 md:text-sm lg:text-lg"
                    >
                       Unlock unparalleled efficiency with our seamless integrations. Simplify complex workflows, boost productivity, and eliminate manual tasks. Experience the power of automation and collaboration, allowing you to focus on what truly matters. Elevate your work experience and achieve more with less effort through our advanced integration solutions
                    </motion.p>
                    <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false , amount:0.25}}
                    className={`${styles.flexCenter} w-full`}
                >
                    <button className={`${styles.secondaryBtn}`}>send us</button>
                </motion.div>
                </motion.div>
            </motion.div> 
            
        </div>
    )
  }  
  
export const HeroFourth = () => {

    return(
        <div className={`${styles.topPaddings} w-full h-full relative grid grid-cols-1 items-center justify-center md:grid-cols-2 `}>
           <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full h-auto"
            > 
                <motion.h1
                variants={textVariant()}
                className={`text-2xl text-center text-text font-semibold md:text-[1.5rem] lg:text-4xl ${styles.topPaddings}`}
                >
                    Advanced Enterprise Security, Enhanced Speed, and Tailored<br/> Personalization
                </motion.h1>

                <motion.p
                        variants={textVariant(0.5)}
                        className="text-center text-primary text-md py-6"
                    >
                        Cutting-edge Security, Unrivaled Speed, and Rigorous Compliance.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView='show'
                        viewport={{once:false , amount:0.25}}
                        className="w-full h-auto grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center"
                    >       
                        <div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.2, 1)}
                                className="flex items-center gap-4"
                            >
                                <MdSettingsInputComposite  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Empowering Computing </h2>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.3, 1)}
                                className="flex items-center gap-4"
                            >
                                <BsFillLockFill  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Robust SSL/TLS Encryption  </h2>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.4, 1)}
                                className="flex items-center gap-4"
                            >
                                <FaSnowman  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Custom White-label Branding</h2>
                            </motion.div>    
                        </div> 
                        <div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.5, 1)}
                                className="flex items-center gap-4"
                            >
                                <MdSettingsInputComposite  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Empowering Computing </h2>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.6, 1)}
                                className="flex items-center gap-4"
                            >
                                <BsFillLockFill  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Robust SSL/TLS Encryption  </h2>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('right', 'tween', 0.7, 1)}
                                className="flex items-center gap-4"
                            >
                                <FaSnowman  className="fill-primary text-lg"/>
                                <h2 className="text-lg text-text">Custom White-label Branding</h2>
                            </motion.div>    
                        </div> 

                    </motion.div>

           </motion.div> 

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{once:false , amount:0.25}}
                className="w-full h-auto"
            > 

                <motion.div
                    variants={fadeIn('down', 'tween', 0.2, 1)}
                    className={`${styles.flexCenter} py-10 md:py-0`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-40 h-40 fill-accent">
                    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                </motion.div>
            </motion.div>


            
        </div>
    )
  }  


  
  