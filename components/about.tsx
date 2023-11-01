'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='about'
    >
        <SectionHeading> About Me </SectionHeading>
        <p className='mb-3'>
            After graduating with a degree in {" "}
            <span className="font-bold">Tourism,</span> I decided to follow my passion for {" "}
            <span className="font-bold">programming</span>. Although my formal education may seem unconventional for a developer, it has endowed me with a{" "}
            <span className="font-bold">unique perspective</span> and a set of skills that I proudly bring to every project. I’ve always had a knack for{" "}
            <span className="italic">developing apps</span>, and moving to the US marked a{" "}
            <span className="font-bold">pivotal moment</span> in my life, providing me with the opportunity to turn my long-time hobby into a{" "}
            <span className="font-bold">thriving career</span>.
        </p>
        <p>
            This transition wasn’t just a change in location; it was a journey of finding my{" "}
            <span className="font-bold">true passion</span>. Diving headfirst into the world of development, I embraced the challenges and opportunities of mastering{" "}
            <span className="underline">React and Next.js</span>, as well as exploring the exciting possibilities within{" "}
            <span className="font-bold">Web3</span>. Today, I stand at a point in my career where I can confidently say that I am{" "}
            <span className="font-bold">exactly where I want to be</span>—creating, innovating, and transforming ideas into{" "}
            <span className="italic">digital reality</span>. My journey has taught me that the path to success is rarely a straight line, but with{" "}
            <span className="font-bold">passion and perseverance</span>, anything is possible. So, let's embark on this exciting journey of development together, creating solutions that are not just functional, but also{" "}
            <span className="font-bold">innovative, secure</span>, and above all,{" "}
            <span className="font-bold">user-centric</span>.
        </p>
    </motion.section>
  )
}
