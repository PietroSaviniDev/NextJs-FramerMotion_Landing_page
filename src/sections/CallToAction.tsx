"use client"
import Arrowright from '@/assets/arrow-right.svg'
import StarImage from '@/assets/star.png'
import SpringImage from '@/assets/spring.png'
import Image from 'next/image';
import { motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const ctaRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150 , -150]);

  return (
    <section ref={ctaRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative ">
          <h2 className="title-secondary title-gradient mt-5">Comincia il viaggio</h2>
          <p className="text-primary mt-10">Inizia oggi per dare una volto nuovo ai tuoi progetti.</p>
          <motion.img 
          style={{
            translateY : translateY
          }}
          src={StarImage.src} 
          alt='StarImage' 
          width={360} 
          className='absolute -left-[350px] -top-[137px]'/>
          <motion.img 
            style={{
              translateY : translateY
            }}
            src={SpringImage.src}
            alt='SpringImage'  
            width={360} 
            className='absolute -right-[331px] top-[10px]'
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button className="btn btn-primary">Ottieni Gratuitamente</button>
          <button className="btn btn-text gap-1">
            <span>scopri di più</span>
            <Arrowright className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

  );
};
