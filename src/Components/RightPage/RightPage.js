import React, { Component } from 'react'
import classes from "./RightPage.css"

class RightPage extends Component {
    render() {
        return (
            <div className="RightPage">
                <h1>{this.props.dispData.title}</h1>
                <img src={this.props.dispData.picture
                } />
            </div>
        )
    }
}

export default React.memo(RightPage)
