import React, { useState }  from "react"
import { useStaticQuery, grap, graphql } from "gatsby"
export default (props) => {

    const data = useStaticQuery(graphql`{
        tecnologiasJson {
            data {
              tecnologias {
                experience
                title
              }
            }
          }
    }`)
    const tecnologiasList = data.tecnologiasJson.data.tecnologias

    let line = 4

    return (
        <div className="pl-4 pt-4" >
            <p>
                <div className="inline-block">
                    <span className="codePurple"><span className="codeWhite ml-2 invisible md:visible">1</span>import </span>
                    <span className="codeBlue"> React</span>
                    <span className="codePurple"> from </span>
                    <span className="codeOrange"> "react"</span>
                </div>
            </p>
         
            <div>
            <span className="codeWhite invisible ml-2 md:visible">2</span>
            <p>
                <div className="inline-block">
                        <span className="codePurple"><span className="codeWhite ml-2 invisible md:visible">3</span>export </span>
                        <span className="codePurple">default </span>
                        <span className="codeGray"> ( ) </span>
                        <span className="codeBlue"> => </span>
                        <span className="codeGray">( </span>
                </div>
            </p>
                
            <p>
                <div className="inline-block">
                    <span className="codeBlue"> <span className="codeWhite invisible ml-2 md:visible">4</span> {"<ul>"}</span>
                </div>
            </p>
            {
                tecnologiasList.map(tecnologia => {
                    line++;
                    return (
                        <p>
                            <div className="inline-block">
                                <span className="codeBlue"> 
                                    <span className={`codeWhite invisible ${line<10?"ml-2":""} md:visible`}>{line}</span> 
                                    <span className="pl-8">{"<li>"}</span>
                                    <span className="codeGray pl-0 pr-0" style={{paddingLeft:0,paddingRight:0}}>{tecnologia.title}</span>
                                    <span className="codeGray" style={{paddingLeft:0,paddingRight:0}}> ({tecnologia.experience})</span>
                                    <span>{"</li>"}</span>
                                </span>
                            </div>
                        </p>
                    )
                }
                )
            }
            
            <p>
                <div className="inline-block">
                    <span className="codeBlue"> <span className="codeWhite invisible  md:visible">14</span> {"<ul>"}</span>
                </div>
            </p>
                
            <p>
                <div className="inline-block">
                <span className="codeBlue" style={{color:"#FFF"}}><span className="codeWhite invisible md:visible">15</span> ) </span>
                </div>
               
            </p>
            </div>
        </div>
    )
}