import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TabContent from "./TabContent"

export default (props) => {
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
    return (
        <>
        <ul className="flex  overflow-scroll principalBar">
            
            <li className="-mb-px mr-1 flex-shrink-0 sm:hidden">
                <a onClick={()=>props.setShowMenu()} className="tabtitle cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-8">
                    <span className="text-white font-bold">☰</span>
                </a>
            </li>
            {
                filesList.map(file => (
                    <li className="-mb-px mr-1 flex-shrink-0">
                        <a onClick={()=>props.changeIndex(file.index)} className={`${props.index==file.index?"tabtitleactive":"tabtitle"} cursor-pointer text-white inline-block  rounded-t py-2 pl-4 pr-12`}>
                            <span className="text-yellow-400 font-bold">JS</span> {file.title}
                        </a>
                    </li>
                ))
            }
        </ul>
        <div className={`footer flex justify-end max-w-full ${props.showMenu?"hidden":""}`}>
            <span className="text-white mr-6  p-1 hidden md:block">Spaces: 2</span>
            <span className="text-white mr-6  p-1 hidden md:block">UTF-8</span>
            <span className="text-white mr-6  p-1 hidden md:block">Javascript</span>
            <a className="text-white mr-6  p-1 ">Idioma: Español</a>
            <div class="downArrow bounce hidden md:block" >
            <span class="arrow"><span></span><span></span></span>
            </div>
        </div>
        <TabContent index={props.index} />
        </>
    )
}