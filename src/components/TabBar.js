import React from "react"
import { useStaticQuery, grap, graphql } from "gatsby"
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
        <ul className="flex overflow-y-scroll principalBar">
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
        <TabContent index={props.index} />
        </>
    )
}