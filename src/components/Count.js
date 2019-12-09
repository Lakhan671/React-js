import React, { Component } from 'react'

  class Count extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               c:0
          }
      }
      myCount(){
        //this.setState(
          //  {c:this.state.c+1},
            //()=>{
              //  console.log(this.state.c)
            //}
        //);  
        this.setState(prev=>({
            c:prev.c+1
          }))
      }
      
      count5times(){
       this. myCount();
       this.myCount();
       this.myCount();
       this.myCount();
       this.myCount(); 
      }
    render() {
        return (
            <div>
                <h1>LAKHAN Singh count-{this.state.c}</h1>
                <button onClick={()=>this.count5times()} name="change">mychange</button>
            </div>
        )
    }
}

export default Count;