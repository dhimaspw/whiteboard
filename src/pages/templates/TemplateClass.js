import React from "react";

class TemplateClass extends React.Component{
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
            <SignIn/>
          );        
    }
}

export default TemplateClass;
