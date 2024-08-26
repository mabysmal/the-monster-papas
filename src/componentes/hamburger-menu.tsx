'use client'
import { useState } from "react";
import { Inter, Pirata_One, DM_Serif_Text } from "next/font/google";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";

const inter = Inter({ subsets: ["latin"] });
const pirata = Pirata_One({ weight: ['400'], subsets: ["latin"] });
const dm = DM_Serif_Text({ weight: ['400'], subsets: ['latin'] });

const HamburgerMenu = () => {

    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
            <h1 className={`${pirata.className} flex-1 text-center text-5xl text-black`}>The Monster Papas</h1>
            <div id="computer-menu">
                <nav>
                    <ul>
                        <a href="/"><li className={`${dm.className} flex`}>Inicio</li></a>
                        <a href="/menu"><li className={`${dm.className} flex`}>Menú</li></a>
                        <a href="/ordenar"><li className={`${dm.className} flex`}>Ordenar</li></a>
                        <a href="/catering"><li className={`${dm.className} flex`}>Catering</li></a>
                        <a href="/contacto"><li className={`${dm.className} flex`}>Contacto</li></a>
                    </ul>
                </nav>
            </div>
            <div id="mobile-menu" className="md:hidden">
                <div className="flex items-center justify-between p-4">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4e38d">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                                </svg>
                            </MenubarTrigger>
                            <MenubarContent>
                            <MenubarSeparator />
                                <a href="/"><MenubarItem className={`${dm.className} flex`}>Inicio</MenubarItem></a>
                                <a href="/menu"><MenubarItem className={`${dm.className} flex`}>Menú</MenubarItem></a>
                                <a href="/ordenar"><MenubarItem className={`${dm.className} flex`}>Ordenar</MenubarItem></a>
                                <a href="/catering"><MenubarItem className={`${dm.className} flex`}>Catering</MenubarItem></a>
                                <a href="/contacto"><MenubarItem className={`${dm.className} flex`}>Contacto</MenubarItem></a>
                                <MenubarSeparator />
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    
            </div>
            </div>
            
        </header>
    );
};

export default HamburgerMenu;

