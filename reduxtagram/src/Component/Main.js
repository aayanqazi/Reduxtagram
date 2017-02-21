import React, { Component } from 'react';
import {Link} from 'react-router'
class Main extends Component {
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
        <div>
            <Link to="/">
            <h1> Reduxtagram </h1></Link>
            {this.props.childrens}
            </div>
        )
    }
}
export default Main