import React from "react";

class Container extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
    increase(){
        const count = this.state.count+1;
        this.setState(count)
    }

    render(){
        return (
            <div> hello container(board) </div>
          );        
    }
}
export default Container;