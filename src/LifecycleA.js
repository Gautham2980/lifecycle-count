import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
           count:0
        }
        console.log("Lifecycle A Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle A getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("Lifecycle A componentDidMount")
    }
    
    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Lifecycle A componentDidUpdate ")
    }

    ChangeState=()=>{
        this.setState({
           count:this.state.count+1
        })
    }

    ChangeSet=()=>{
        this.setState({
            count:this.state.count>0?this.state.count-1:0
        })
    }
    
    render(){
        console.log("Lifecycle A Render")
        return(
            <div className='lifecycle'>
                <h3>LifecycleA</h3>
                <div className='btn'>
                <button onClick={this.ChangeState} className='inc'>Increment</button>
                <button onClick={this.ChangeSet} className='dec'>Decrement</button>
                </div>
                <h3 className='num'>{this.state.count}</h3>
                <LifecycleB />
            </div>
        )
            
        
    }
}

export default LifecycleA