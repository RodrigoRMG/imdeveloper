import React from "react"
import TabContent from "./TabContent"

export default (props) => {
    return (
        <>
        <ul className="flex overflow-y-scroll principalBar">
            <li className="-mb-px mr-1 flex-shrink-0">
                <a onClick={()=>props.changeIndex(0)} className={`${props.index==0?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> index.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>props.changeIndex(1)} className={`${props.index==1?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Experiencia.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>props.changeIndex(2)} className={`${props.index==2?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Tecnologias.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>props.changeIndex(3)} className={`${props.index==3?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Educacion.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>props.changeIndex(4)} className={`${props.index==4?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Contacto.js
                </a>
            </li>
            <li className="mr-1  flex-shrink-0">
                <a onClick={()=>props.changeIndex(5)} className={`${props.index==5?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                    <span className="text-yellow-400 font-bold">JS</span> Acerca.js
                </a>
            </li>
        </ul>
        <TabContent index={props.index} />
        </>
    )
}