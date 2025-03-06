"use client"

import Image from "next/image";
import AcmeLogo from '@/assets/logo-acme.png'
import QuantumLogo from '@/assets/logo-quantum.png'
import EchoLogo from '@/assets/logo-echo.png'
import CelestialLogo from '@/assets/logo-celestial.png'
import ApexLogo from '@/assets/logo-apex.png'
import { motion } from "framer-motion";
import { useRef } from "react";

export const LogoTicker = () => {
  const logoTickerRef = useRef(null);

  return(

    <section className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div 
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: '-50%'
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop'
              }}
            >
              <Image className="logo-ticker-img" alt="acmeLogo" src={AcmeLogo}/>
              <Image className="logo-ticker-img" alt="QuantumLogo" src={QuantumLogo}/>
              <Image className="logo-ticker-img" alt="EchoLogo" src={EchoLogo}/>
              <Image className="logo-ticker-img" alt="CelestialLogo" src={CelestialLogo}/>
              <Image className="logo-ticker-img" alt="ApexLogo" src={ApexLogo}/>
              {/* per l'animazione con effetto infinito dobbiamo doppiare le immagini */}
              <Image className="logo-ticker-img" alt="acmeLogo" src={AcmeLogo}/>
              <Image className="logo-ticker-img" alt="QuantumLogo" src={QuantumLogo}/>
              <Image className="logo-ticker-img" alt="EchoLogo" src={EchoLogo}/>
              <Image className="logo-ticker-img" alt="CelestialLogo" src={CelestialLogo}/>
              <Image className="logo-ticker-img" alt="ApexLogo" src={ApexLogo}/>
            </motion.div>
          </div>
        </div>
    </section>
 
  );
};
