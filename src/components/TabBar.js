import React from "react"

export default () => {
    return (
        <ul class="flex overflow-y-scroll hideScrollBar">
            <li class="-mb-px mr-1">
                <a class="tabtitleactive text-white inline-block  rounded-t py-2 pl-4 pr-12" href="#">
                    <span className="text-yellow-400 font-bold">JS</span> index.js
                </a>
            </li>
            <li class="mr-1">
                <a class="tabtitle text-white inline-block py-2 pl-4 pr-12 " href="#">
                    <span className="text-yellow-400 font-bold">JS</span> Experiencia.js
                </a>
            </li>
            <li class="mr-1">
                <a class="tabtitle text-white inline-block py-2 pl-4 pr-12" href="#">
                    <span className="text-yellow-400 font-bold">JS</span> Tecnologias.js
                </a>
            </li>
            <li class="mr-1">
                <a class="tabtitle text-white  inline-block py-2 pl-4 pr-12" href="#">
                    <span className="text-yellow-400 font-bold">JS</span> Educacion.js
                </a>
            </li>
        </ul>
    )
}