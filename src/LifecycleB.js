import React, { Component } from 'react'


class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"React JS"
        }
        console.log("Lifecycle B Constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle B getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("Lifecycle B componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponentUpdate");
        return true
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Lifecycle B componentDidUpdate ");
    }
    
    render(){
        console.log("Lifecycle B Render");
        return(
            <div>
                <h3>LifecycleB</h3>
            </div>
        )
            
        
    }
}

export default LifecycleB;