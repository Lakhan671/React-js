import React from 'react'
import './mycss.css'

function Stylecss(props) {
    let className=props.primary?'primary':''
    return (
        <div>
         <h1 className={`${className} font-xl`}>Lakhan</h1>   
        </div>
    )
}

export default Stylecss
