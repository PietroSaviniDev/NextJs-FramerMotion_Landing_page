'use client'
import CheckIcon from '@/assets/check.svg'
import React from 'react'
import { twMerge } from "tailwind-merge"
import { motion, useScroll, useTransform } from 'framer-motion';

type PricingCardProps = {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export const PricingCard = ({ title, monthlyPrice, buttonText, popular, inverse, features }: PricingCardProps) => {
  return (
    <div className={twMerge('card', inverse === true && 'border-black bg-black text-white')}>

      <div className='flex justify-between'>
        <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
        {popular === true && (
          <div className='px-4 py-1.5 rounded-xl border border-white/20'>
            <motion.span 
            animate={{
              backgroundPositionX: '+100%'
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
              duration: 1
            }}
            className='text-transparent bg-clip-text font-medium bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%]'>Popolare</motion.span>
          </div>
        )}
      </div>

      <div className='flex items-baseline gap-1 mt-[30px]'>
        <span className='text-4xl font-bold -tracking-tighter leading-none'>€{monthlyPrice}</span>
        <span className={twMerge('tracking-tight font-bold text-black', inverse === true && 'text-white')}>/mese</span>
      </div>
      <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
      <ul className='flex flex-col gap-5 mt-8'>
        {features.map((feature, index) =>
          <li key={index} className='text-sm flex items-center gap-4'>
            <CheckIcon className='h-6 w-6' />
            <span>{feature}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
