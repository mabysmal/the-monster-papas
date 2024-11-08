import { Inter, Pirata_One, DM_Serif_Text } from "next/font/google";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";


const inter = Inter({ subsets: ["latin"] });
const pirata = Pirata_One({ weight: ['400'], subsets: ["latin"] });
const dm = DM_Serif_Text({ weight: ['400'], subsets: ['latin'] });

const HamburgerMenu = () => {
    return (
        <header className=" pb-2 md:pb-0 flex flex-col items-center bg-black pt-4 border-b-[solid] border-b-[#dd9f31]  border-b-[0.25rem]">
            {/* Container for header elements */}
            <div className="flex w-full items-center justify-between px-4 md:px-8">
                {/* Mobile Menu (visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#dd9f31">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                                </svg>
                            </MenubarTrigger>
                            <MenubarContent className="bg-black">
                                <a href="/"><MenubarItem className={`${dm.className} text-2xl text-[#dd9f31]`}>Inicio</MenubarItem></a>
                                <MenubarSeparator />
                                <a href="/menu"><MenubarItem className={`${dm.className} text-2xl text-[#dd9f31]`}>Menú</MenubarItem></a>
                                <MenubarSeparator />
                                <a href="/ordenar"><MenubarItem className={`${dm.className} text-2xl text-[#dd9f31]`}>Ordenar</MenubarItem></a>
                                <MenubarSeparator />
                                <a href="/catering"><MenubarItem className={`${dm.className} text-2xl text-[#dd9f31]`}>Catering</MenubarItem></a>
                                <MenubarSeparator />
                                <a href="/contacto"><MenubarItem className={`${dm.className} text-2xl text-[#dd9f31]`}>Contacto</MenubarItem></a>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                {/* Title */}
                <h1 className={`${pirata.className} text-center text-4xl text-white md:text-6xl md:mb-4 flex-grow md:underline md:[text-decoration-color:#dd9f31]`}>
                    The Monster Papas
                </h1>
            </div>

            {/* Computer Menu (visible on larger screens) */}
            <nav className="hidden md:flex w-full justify-center mb-4">
                <ul className="flex space-x-8">
                    {['Inicio', 'Menú', 'Ordenar', 'Catering', 'Contacto'].map((item) => (
                        <li key={item} className={`${dm.className} text-xl text-[#dd9f31] flex flex-col items-center`}>
                            <a href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                {item}
                            </a>
                            <svg className="mt-[-1rem]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#dd9f31" fillRule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clipRule="evenodd"/>
                            </svg>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default HamburgerMenu;