import React, { useState }  from "react"

export default (props) => {
    return (
        <div className="pl-4 pt-4" >
            <p className="comment"><span className="codeWhite invisible ml-2 md:visible">1</span>/*</p>
            <p className="comment max-w-full overflow-x-scroll"><span className="codeWhite ml-2 invisible md:visible">2</span>¡Hola! Mi nombre es Rodrigo, soy desarrollador Fullstack con 5 años de experiencia.</p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">3</span>Soy originario de Chiapas pero vivo en Guadalajara, Jalisco.</p>
            <span className="codeWhite ml-2 invisible md:visible">4</span>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">5</span>Me encanta la tecnología y todo el tiempo busco algo nuevo que aprender.</p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">6</span>En las pestañas de arriba podrás saber un poco más de mí.</p>
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
                    <span className="codeBlue"> Bienvenida</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "../../Bienvenida"</span>
                </div>
            </p>
            <div>
            <span className="codeWhite invisible md:visible">10</span>
            <p>
                <div className="inline-block">
                        <span className="codePurple"><span className="codeWhite invisible md:visible">11</span>export </span>
                        <span className="codePurple">default </span>
                        <span className="codeBlue">Bienvenida</span>
                </div>
            </p>
            </div>
        </div>
    )
}