import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';

type TestimonialsCardProps = {
    text: string;
    imageSrc: string;
    name: string;
    username: string;

}

const TestimonialCard = (props: TestimonialsCardProps) => {
    const {text, imageSrc, name, username } = props;
    return(
        <div className='card'>
            <div>{text}</div>
            <div className='flex items-center gap-2 mt-5'>
                <Image src={imageSrc} width={40} height={40} alt={name} className='h-10 w-10 rounded-full'/>
                <div className='flex flex-col'>
                    <div className='font-medium tracking-tight leading-5'>{name}</div>
                    <div className='leading-5 tracking-tight'>{username}</div>
                </div>
            </div>
        </div>
    )
}

export const TestimonialColumn = ({cards, className, duration}:{cards: TestimonialsCardProps[], className?:string, duration?: number}) => {
   
    return (
        <div className={className}>
            <motion.div 
                animate={{
                    translateY : '-50%'
                }}
                transition={{
                    duration: duration || 10,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop'
                }}
                className={"flex flex-col gap-6 pb-6"}
            >
                {/* hack per duplicare le card nelle colonne per effetto scroll infinito */}
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {cards.map((item, index) => <TestimonialCard {...item} key={index}/>)}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
  )
}
