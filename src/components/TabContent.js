import React, { useState }  from "react"
import Inicio from "./Inicio"
import Experiencia from "./Experiencia"
import Educacion from "./Educacion"
import Tecnologias from "./Tecnologias"
import Contacto from "./Contacto"
import Acerca from "./Acerca"

export default (props) => {
    switch(props.index)
    {
        case 0:
            return <Inicio />
            
        case 1:
            return <Experiencia/>
            
        case 2:
            return <Tecnologias/>
            
        case 3:
            return <Educacion/>

        case 4:
            return <Contacto/>

        case 5:
            return <Acerca/>
            
    }
}