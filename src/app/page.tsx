import Image from "next/image";                                                                                                                                       
import { Inter, Pirata_One, DM_Serif_Text } from "next/font/google";                                                                                                  
import HamburgerMenu from "@/componentes/hamburger-menu";
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
             <button className={`${dm.className}`}>                                                                                    
               Order Now!                                                                                                                                              
             </button>                                                                                                                                                 
           </a>                                                                                                                                                        
           <div className="h-full">                                                                                                                                    
             <Image                                                                                                                                                    
               src="/hamburguesamitadbanner.jpg"                                                                                                                       
               width={540}                                                                                                                                             
               height={540}                                                                                                                                            
               alt="Mitad de Hamburguesa Clasica"                                                                                                                      
               className="h-full object-cover"                                                                                                                         
             />                                                                                                                                                        
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
