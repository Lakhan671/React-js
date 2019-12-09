import React from 'react'

function ChildComponrnt(props) {
    return (
        <div>
           <button onClick={()=>props.greethandler('child')}>greetbutton</button> 
        </div>
    )
}

export default ChildComponrnt
