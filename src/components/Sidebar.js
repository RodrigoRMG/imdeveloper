import React, { useEffect, useState } from "react"
import { useStaticQuery, grap, graphql } from "gatsby"
import TabBar from "./TabBar"

export default () => {
    const data = useStaticQuery(graphql`{
        archivosJson {
            data {
              archivos {
                index
                title
              }
            }
        }
    }`)
    const filesList = data.archivosJson.data.archivos
    const [showMenu,setShowMenu] = useState(false);
    const [expanded,setExpanded] = useState(true);
    const [activeIndexmenu,setActiveIndexmenu] = useState(0);
    return (
        <>
        <div className={`sidebar w-1/5 h-screen ${!showMenu?"hidden":""} md:block flex-shrink-0`} style={{minWidth:200}}>
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
                    {
                        filesList.map(file => (
                            <li className={`mt-1 pl-8 ${activeIndexmenu==file.index?"fileSelected":""}`}>
                                <a onClick={()=>setActiveIndexmenu(file.index)} className="cursor-pointer py-2 px-4  text-white">
                                    <span className="text-yellow-400 font-bold">JS</span> {file.title}
                                </a>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
        <div className="tabbar w-screen h-screen md:w-4/5 flex-shrink-0">
            <TabBar setShowMenu={()=>setShowMenu(!showMenu)} index={activeIndexmenu} changeIndex={(index)=>setActiveIndexmenu(index)}/>
        </div>
        </>
    )
}