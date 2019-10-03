import React, { useState }  from "react"

export default () => {
    const [activeIndex,setActiveIndex] = useState(0);
    return (
        <ul className="flex overflow-y-scroll hideScrollBar">
            <li className="-mb-px mr-1 flex-shrink-0">
                <a onClick={()=>setActiveIndex(0)} className={`${activeIndex==0?"tabtitleactive":"tabtitle"} text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> index.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>setActiveIndex(1)} className={`${activeIndex==1?"tabtitleactive":"tabtitle"} text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Experiencia.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>setActiveIndex(2)} className={`${activeIndex==2?"tabtitleactive":"tabtitle"} text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Tecnologias.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>setActiveIndex(3)} className={`${activeIndex==3?"tabtitleactive":"tabtitle"} text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Educacion.js
                </a>
            </li>
        </ul>
    )
}