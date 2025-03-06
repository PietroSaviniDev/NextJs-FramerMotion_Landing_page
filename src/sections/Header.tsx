import { BannerPromo } from "@/components/BannerPromo";
import { Navbar } from "@/components/Navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <BannerPromo visible text="Inizia subito Gratuitamente!" />
      <Navbar />
    </header>
  )
};
