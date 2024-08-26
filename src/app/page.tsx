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
      
      <h1 className={`${pirata.className} flex`}>WOW</h1>
      <p className={`${inter.className} flex`}>holi</p>
      <span className={`${dm.className} flex`}>cuyo cuy cuy</span>
    </main>
  );
}
