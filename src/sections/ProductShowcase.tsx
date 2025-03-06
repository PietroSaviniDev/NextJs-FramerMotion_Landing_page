"use client"
import ProductImage from '@/assets/product-image.png'
import PyramidImage from '@/assets/pyramid.png'
import TubeImage from '@/assets/tube.png'
import { Tag } from '@/components/misc/Tag';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section ref={productShowcaseRef} className='bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container ">
        <div className='section-heading'>
          <div className='flex justify-center'>
            <Tag text='Dai un boost alla tua produttività' />
          </div>
          <h2 className='text-center text-3xl title-gradient mt-5 md:text-[54px] md:leading-[60px]'>Un modo efficace per tracciare i tuoi progressi</h2>
          <p className='text-primary mt-5'>Trasforma le tue idee in un sito web funzionale e responsive in pochi minuti con questo template</p>
        </div>
        <div className="relative">
          <Image alt='product-image' src={ProductImage} className='mt-10' />
          <motion.img 
            style={{
              translateY : translateY
            }}
            alt='PyramidImage' 
            src={PyramidImage.src} 
            height={262} 
            width={262} 
            className='absolute hidden md:block -right-36 -top-32' 
          />

          <motion.img 
            style={{
              translateY : translateY
            }}
            alt='TubeImage' 
            src={TubeImage.src} 
            height={248} 
            width={248} 
            className='absolute hidden md:block bottom-24 -left-36' 
          />
        </div>
      </div>
    </section>
  );
};
