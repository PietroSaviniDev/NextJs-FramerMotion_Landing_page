"use client"
import { Tag } from "@/components/misc/Tag";
import ArrowRight from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import Image from "next/image";
import CylinderImg from '@/assets/cylinder.png';
import NoodleImg from '@/assets/noodle.png'
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) => console.log(latestValue))
  return (
    <>
      <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center ">
            <div className="md:w-[478px]">
              <Tag text="Versione 2.0" />
              <h1 className="title-primary title-gradient mt-6">La strada verso la produttività</h1>
              <p className='text-xl text-[#010D3E] tracking-tight mt-6'>Celebra il raggiungimento dei tuoi obiettivi con una app che segue i tuopi progressi, motiva i tuoi sforzi e celebra i tuoi successi! </p>
              <div className="flex gap-1 items-center mt-[30px]">
                  <button className="btn btn-primary">Ottieni Gratuitamente!</button>
                  <button className="btn btn-text gap-1 ">
                    <span>Scopri di più</span>
                    <ArrowRight className='h-5 w-5' />
                  </button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
              <motion.img 
                src={CogImage.src} 
                alt="Cog Image" 
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 " 
                animate={{
                  translateY: [-30, 30]
                }}

                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 3,
                  ease: 'easeInOut'
                }}
              />
                
              <motion.img 
                style={{
                  translateY: translateY,

                }}
                src={CylinderImg.src} 
                width={220} height={220} 
                alt="cylinder image" 
                className="hidden md:block -top-8 -left-32 md:absolute"/>
              
              <motion.img 
                style={{
                  translateY: translateY,
                  //translateX: translateY,
                  rotate: translateY
                }}
                src={NoodleImg.src} 
                width={220} 
                alt="noodle image" 
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
