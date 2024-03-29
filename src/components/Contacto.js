import React, { useState }  from "react"
import { useStaticQuery, grap, graphql } from "gatsby"
export default (props) => {

    const data = useStaticQuery(graphql`{
        educacionJson {
            data {
                educacion {
                date
                title
                address
              }
            }
          }
    }`)
    const  educacionList = data.educacionJson.data.educacion

    let line = 4

    return (
        <div className="pl-4 pt-4" >

            <p className="comment"><span className="codeWhite invisible ml-2 md:visible">1</span>/*</p>
            <p className="comment "><span className="codeWhite ml-2 invisible md:visible">2</span><a href="https://www.linkedin.com/in/rodrigo-m%C3%A9ndez-8808aab1/">Puedes visitar mi perfil de linkedin</a></p>
            <span className="codeWhite invisible ml-2 md:visible">3</span>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">4</span><a href="https://www.dropbox.com/s/up09xyqsnzj29pz/Rodrigo%20Mendez.pdf?dl=0" target="blank">O también puedes descargar mi CV</a></p>
            <p className="comment"><span className="codeWhite ml-2 invisible md:visible">5</span> */</p>

            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2 invisible md:visible">6</span>import </span>
                    <span className="codeBlue"> React</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "react"</span>
                </div>
            </p>

           
         

            
            <p>
                <div className="inline-block">
                        <span className="codePurple"><span className="codeWhite ml-2  invisible md:visible">7</span>export </span>
                        <span className="codePurple">default </span>
                        <span className="codeGray"> ( ) </span>
                        <span className="codeBlue"> => </span>
                        <span className="codeGray">( </span>
                </div>
            </p>
                
            <p>
                <div className="inline-block">
                    <span className="codeBlue"> <span className="codeWhite ml-2 invisible md:visible">8</span> {"<ul>"}</span>
                </div>
            </p>
            <p>
                <div className="inline-block">
                    <span className="codeBlue"> 
                        <span className={`codeWhite invisible ml-2 md:visible`}>9</span> 
                        <span className="pl-8">{"<li>"}</span>
                        <span className="codeGray pl-0 pr-0" style={{paddingLeft:0,paddingRight:0}}>Teléfono: 3321214680</span>
                        <span>{"</li>"}</span>
                    </span>
                </div>
            </p>

            <p>
                <div className="inline-block">
                    <span className="codeBlue"> 
                        <span className={`codeWhite invisible  md:visible`}>10</span> 
                        <span className="pl-8">{"<li>"}</span>
                        <span className="codeGray pl-0 pr-0" style={{paddingLeft:0,paddingRight:0}}>Email: rodrigo_2392@hotmail.com</span>
                        <span>{"</li>"}</span>
                    </span>
                </div>
            </p>
            
            <p>
                <div className="inline-block">
                    <span className="codeBlue"> <span className="codeWhite invisible  md:visible">11</span> {"<ul>"}</span>
                </div>
            </p>
                
            <p>
                <div className="inline-block">
                <span className="codeBlue" style={{color:"#FFF"}}><span className="codeWhite invisible md:visible">12</span> ) </span>
                </div>
               
            </p>
        </div>
    )
}