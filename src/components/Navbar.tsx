import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg'
import Image from 'next/image';

export const Navbar = () => {
    // hook react


    return (
        <div className='py-5'>
            <div className='container'>
                <div className=' flex items-center justify-between'>
                    <Image src={Logo} alt='Saas Logo' height={40} width={40} />
                    <MenuIcon className='h-5 w-5 md:hidden' />
                    <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                        <a href='#'>About</a>
                        <a href='#'>Caratteristiche</a>
                        <a href='#'>Clienti</a>
                        <a href='#'>Novità</a>
                        <a href='#'>Supporto</a>
                        <button className='btn btn-primary'>Ottieni gratis</button>
                    </nav>
                </div>
            </div>
        </div>
    )
};
