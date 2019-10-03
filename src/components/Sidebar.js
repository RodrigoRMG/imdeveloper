import React, { useEffect, useState } from "react"

export default () => {
    const [expanded,setExpanded] = useState(true);
    return (
        <ul class="">
            <li class="mt-1">
                <a class="py-2 px-4 font-semibold text-white" onClick={()=>setExpanded(!expanded)}>
                    {
                        !expanded?<i class="chevron right"></i>:<i class="chevron bottom"></i>
                    }
                    <span clasName="pl-4"> Rodrigo Mendez</span>
                    </a>
            </li>
            <div className={expanded?"hidden":""}>
                <li class="mt-1 pl-8">
                    <a class="py-2 px-4  text-white" href="#">
                        <span className="text-yellow-400 font-bold">JS</span> index.js
                    </a>
                </li>
                <li class="mt-1 pl-8">
                    <a class="py-2 px-4  text-white" href="#">
                        <span className="text-yellow-400 font-bold">JS</span> Experiencia.js
                    </a>
                </li>
                <li class="mt-1 pl-8">
                    <a class="py-2 px-4 text-white" href="#">
                        <span className="text-yellow-400 font-bold">JS</span> Tecnologias.js
                    </a>
                </li>
                <li class="mt-1 pl-8">
                    <a class="py-2 px-4 text-white" href="#">
                        <span className="text-yellow-400 font-bold">JS</span> Educacion.js
                    </a>
                </li>
            </div>
            
        </ul>
    )
}