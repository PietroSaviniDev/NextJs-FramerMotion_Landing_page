import React from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
type BannerPromoProps = {
    visible: boolean;
    text?: string;
    link?: string;
}

export const BannerPromo = (props: BannerPromoProps) => {
    return (
        <>
            {props.visible ? (
                <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
                    <p className='text-white/60 hidden md:block'>Semplifica il lavoro e aumenta la tua produttività</p>
                    <div className='inline-flex gap-1 items-center'>
                        <p>{props.text}</p>
                        <ArrowRight className='h4 w-4 inline-flex justify-center items-center' />
                    </div>
                </div>
            ) : null}
        </>
    )
}
