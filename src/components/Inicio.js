import React, { useState }  from "react"

export default (props) => {
    return (
        <div className="pl-12 pt-4">
            <p className="comment"><span className="codeWhite ml-2">1</span>/*</p>
            <p className="comment"><span className="codeWhite ml-2">2</span>¡Hola! Mi nombre es Rodrigo, soy desarrollador Fullstack con 5 años de experiencia.</p>
            <p className="comment"><span className="codeWhite ml-2">3</span>Soy originario de Chiapas pero vivo en Guadalajara, Jalisco.</p>
            <span className="codeWhite ml-2">4</span>
            <p className="comment"><span className="codeWhite ml-2">5</span>Me encanta la tecnología y todo el tiempo busco algo nuevo que aprender.</p>
            <p className="comment"><span className="codeWhite ml-2">6</span>En las pestañas de arriba podrás saber un poco más de mí.</p>
            <p className="comment"><span className="codeWhite ml-2">7</span> */</p>
            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2">8</span>import </span>
                    <span className="codeBlue"> React</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "react"</span>
                </div>
            </p>
            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2">9</span>import </span>
                    <span className="codeBlue"> Bienvenida</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "../../Bienvenida"</span>
                </div>
            </p>
            <div>
            <span className="codeWhite">10</span>
            <p>
                <div className="inline-block">
                        <span className="codePurple"><span className="codeWhite">11</span> export </span>
                        <span className="codePurple">default </span>
                        <span className="codeBlue">Bienvenida</span>
                </div>
            </p>
            </div>
        </div>
    )
}