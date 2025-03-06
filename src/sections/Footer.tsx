import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialPinterest from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';



export const Footer = () => {
  return (
    <footer className="bg-black py-20 text-[#BCBCBC] text-sm text-center">
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur beforebefore:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt='Logo saas' height={40} className='relative ' />
        </div>
        <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
          <a href="#">About</a>
          <a href="#">Caratteristiche</a>
          <a href="#">Clienti</a>
          <a href="#">Novità</a>
          <a href="#">Prezzi</a>
          <a href="#">Supporto</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX/>
          <SocialInsta/>
          <SocialLinkedin/>
          <SocialPinterest/>
          <SocialYoutube/>
        </div>
        <p className='mt-6'>&copy; 2024 SaviniPietroDevelopments, all Rights Reserved.</p>
      </div>
    </footer>
  );
};
