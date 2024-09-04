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
      <div id="hamb-order" className="flex border-[solid] border-white border-[0.25rem]">
        <div id="order" className="flex ">
          <a href="/order" className="a">
            <button className="text-white border-[solid] border-[#dd9f31]  border-[0.25rem] rounded-lg">
              Order Here
            </button>
          </a>
        </div>
        <div id="hamb" className="flex justify-end">
          <Image
            className="flex"
            src="/hamburguesamitadbanner.jpg"
            width={1080}
            height={1080}
            style={{ width: '75%', height: 'auto' }}
            alt="Mitad de Hamburguesa Clasica"
          />
        </div>
        
      </div>
      
      
    </main>
  );
}
