import React, { useEffect, useState } from "react"
import TabBar from "./TabBar"

export default () => {
    const [expanded,setExpanded] = useState(true);
    const [activeIndexmenu,setActiveIndexmenu] = useState(0);
    return (
        <>
        <div className="sidebar w-1/5 h-screen hidden md:block flex-shrink-0" style={{minWidth:200}}>
            <ul className="">
                <li className="mt-1">
                    <a className="py-2 px-4 font-semibold text-white" onClick={()=>setExpanded(!expanded)}>
                        {
                            expanded?<i className="chevron bottom "></i>:<i className="chevron right"></i>
                        }
                        <span className="pl-4"> Rodrigo Mendez</span>
                        </a>
                </li>
                <div className={!expanded?"hidden":""}>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(0)} className="cursor-pointer py-2 px-4  text-white">
                            <span className="text-yellow-400 font-bold">JS</span> index.js
                        </a>
                    </li>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(1)} className="cursor-pointer py-2 px-4  text-white">
                            <span className="text-yellow-400 font-bold">JS</span> Experiencia.js
                        </a>
                    </li>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(2)} className="cursor-pointer py-2 px-4 text-white">
                            <span className="text-yellow-400 font-bold">JS</span> Tecnologias.js
                        </a>
                    </li>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(3)} className="cursor-pointer py-2 px-4 text-white">
                            <span className="text-yellow-400 font-bold">JS</span> Educacion.js
                        </a>
                    </li>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(4)} className="cursor-pointer py-2 px-4 text-white">
                            <span className="text-yellow-400 font-bold">JS</span> Contacto.js
                        </a>
                    </li>
                    <li className="mt-1 pl-8">
                        <a onClick={()=>setActiveIndexmenu(5)} className="cursor-pointer py-2 px-4 text-white">
                            <span className="text-yellow-400 font-bold">JS</span> Acerca.js
                        </a>
                    </li>
                </div>
                
        </ul>
        </div>
        <div className="tabbar w-screen h-screen md:w-4/5 flex-shrink-0">
            <TabBar index={activeIndexmenu} changeIndex={(index)=>setActiveIndexmenu(index)}/>
        </div>
        </>
    )
}