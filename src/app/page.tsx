import Image from "next/image";
import { Inter, Pirata_One, DM_Serif_Text } from "next/font/google";
import HamburgerMenu from "@/componentes/hamburger-menu";



const pirata = Pirata_One ({ weight: ['400'], subsets: ["latin"]})
const dm = DM_Serif_Text ({ weight:['400'], subsets: ['latin'] })
const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className="bg-black ">
      <HamburgerMenu></HamburgerMenu>
      <div>
        <Image
          className="flex"
          src="/hamburguesamitad.jpg"
          width={1080}
          height={1080}
          style={{ width: '50%', height: 'auto' }}
          alt="Mitad de Hamburguesa Clasica"
        />
      </div>
      
      
    </main>
  );
}
