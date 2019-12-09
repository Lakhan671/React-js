import React from 'react';
function Greet(props){
  return (
        <div>
        <h1>hello Lakhan {props.name} </h1>
        {props.children}
        </div>
  )
}

// export const Greet=()=> <h1>hello Lks</h1>
export default Greet;