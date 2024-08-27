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
        <header className="fixed top-0 left-0 right-0 z-50 bg-black  pt-4 ">
            {/* Flex container for header and mobile menu */}
            <div className="flex items-center justify-between p-4">
                
                {/* Mobile Menu (visible on small screens) */}
                <div id="mobile-menu" className="md:hidden">
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
                <h1 className={`${pirata.className} text-center text-4xl text-white flex-1 md:text-6xl md:pt-2`}>The Monster Papas</h1>

            </div>

            {/* Computer Menu (visible on larger screens) */}
            <div id="computer-menu" className="hidden md:block">
                <nav className="a">
                    <ul className="flex  pb-2 px-4 items-center justify-center">
                        
                        <li className={`${dm.className} px-4 text-xl text-[#dd9f31] items-center justify-center`}><a className="items-center justify-center" href="/">Inicio<svg className=" mt-[-1rem] mx-auto items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#dd9f31" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"/></svg></a></li>
                        <li className={`${dm.className} px-4 text-xl text-[#dd9f31] items-center justify-center`}><a className="items-center justify-center" href="/menu">Menú<svg className="mt-[-1rem] mx-auto  items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#dd9f31" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"/></svg></a></li>
                        <li className={`${dm.className} px-4 text-xl text-[#dd9f31] items-center justify-center`}><a className="items-center justify-center" href="/ordenar">Ordenar<svg className="mt-[-1rem] mx-auto  items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#dd9f31" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"/></svg></a></li>
                        <li className={`${dm.className} px-4 text-xl text-[#dd9f31] items-center justify-center`}><a className="items-center justify-center" href="/catering">Catering<svg className=" mt-[-1rem] mx-auto  items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#dd9f31" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"/></svg></a></li>
                        <li className={`${dm.className} px-4 text-xl text-[#dd9f31] items-center justify-center`}><a className="items-center justify-center" href="/contacto">Contacto<svg className="mt-[-1rem] mx-auto  items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#dd9f31" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"/></svg></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HamburgerMenu;
