import React,{Component} from "react";
import propTypes from "prop-types";

class Echo extends Component{

    static propTypes={
        mytext:propTypes.string
    }


    render(){
        return( 
        <p className="echo">Echo:{
           
            this.props.mytext
            }</p>
        )
    }

}

export default Echo;