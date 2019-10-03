import React, { useState }  from "react"

export default (props) => {
    return (
        <div className="pl-4 pt-4" >
            <p className="comment"><span className="codeWhite invisible ml-2 md:visible">1</span>/*</p>
            <p className="comment max-w-full overflow-x-scroll"><span className="codeWhite ml-2 invisible md:visible">2</span>Este sitio web utiliza gatsby, un framework</p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">3</span>que integra react y graqhql para el desarrollo de aplicaciones y sitios web</p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">4</span>de manera más rápida y eficiente</p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">5</span>Si quieres ver el código puedes ir al siguiente link:</p>
            <p className="codeBlue" style={{color:"#FFF"}}><span className="codeWhite ml-2 invisible md:visible">6</span><a href="https://github.com/RodrigoRMG/imdeveloper" target="blank">Repositorio de github</a></p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">7</span> */</p>
            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2 invisible md:visible">8</span>import </span>
                    <span className="codeBlue"> React</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "react"</span>
                </div>
            </p>
            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2 invisible md:visible">9</span>import </span>
                    <span className="codeBlue"> Despedida</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "../../Despedida"</span>
                </div>
            </p>
            <div>
            <span className="codeWhite invisible md:visible">10</span>
            <p>
                <div className="inline-block">
                        <span className="codePurple"><span className="codeWhite invisible md:visible">11</span>export </span>
                        <span className="codePurple">default </span>
                        <span className="codeBlue">Despedida</span>
                </div>
            </p>
            </div>
        </div>
    )
}