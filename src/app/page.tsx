import Image from "next/image";                                                                                                                                       
import { Inter, Pirata_One, DM_Serif_Text } from "next/font/google";                                                                                                  
import HamburgerMenu from "@/componentes/hamburger-menu";
import ResponsiveImage from "@/componentes/bannerprincipalhamburguesa";
import './styles.css'                                                                                                             
                                                                                                                                                                       
 const pirata = Pirata_One({ weight: ['400'], subsets: ["latin"] });                                                                                                   
 const dm = DM_Serif_Text({ weight: ['400'], subsets: ['latin'] });                                                                                                    
 const inter = Inter({ subsets: ["latin"] });                                                                                                                          
                                                                                                                                                                       
 export default function Home() {                                                                                                                                      
   return (                                                                                                                                                            
     <main className="bg-black">                                                                                                                          
       <HamburgerMenu />                                                                                                                                               
       <div id="ordenar" className="flex justify-end items-center py-4">                                                                                               
         <div className="flex items-center">                                                                                                                           
           <a href="/order" className="">            
            <button className={`${dm.className} text-white border-round rounded-lg border-solid border-orange border-[0.25rem] hover:bg-orange hover:text-black` }>                                                                                    
               <span className="px-4 py-6" > Order Now! </span>                                                                                                                                            
            </button>                                                                                                                                                 
            </a>
            <a>
              <button>
                
              </button>
            </a>                                                                                                                                                        
          <div className="h-full">                                                                                                                                    
              <ResponsiveImage />                                                                                                                                                        
          </div>                                                                                                                                                      
         </div>                                                                                                                                                        
       </div>                                                                                                                                                          
       <div id="catering">                                                                                                                                             
         <Image                                                                                                                                                        
           src='/eventos.png'                                                                                                                                           
           width={1000}                                                                                                                                                
           height={2000}                                                                                                                                               
           alt=""                                                                                                                                                      
           className=""                                                                                                                                                
         />                                                                                                                                                            
       </div>                                                                                                                                                          
     </main>                                                                                                                                                           
   );                                                                                                                                                                  
 } 
