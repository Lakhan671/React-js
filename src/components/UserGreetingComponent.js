import React, { Component } from 'react'

class UserGreetingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: true
        }
    }

    render() {

        let mesg = '';
        if (this.state.isLogin) {
            mesg = 'Welcome Lakhan';
        } else {
            mesg = 'Welcome Gest';
        }
        return (
            <div>
                <div>{mesg}</div>

            </div>
        );
        //  if(this.state.isLogin){
        //     return (
        //         <div>
        //           <div>  Lakhan Singh user</div>
        //         </div>
        //     )
        //  }else{
        //     return (
        //         <div>

        //           <div>Welcome gest</div>
        //         </div>
        //     )
        //  }
        // return (
        //     <div>
        //       <div>  Lakhan Singh user</div>
        //       <div>Welcome gest</div>
        //     </div>
        // )
    }
}

export default UserGreetingComponent
