import React, { Component } from 'react'
import classes from "./LeftPage.css"

import dataArr from "../../dataArr"

class LeftPage extends Component {



    render() {
        console.log("rendering")
        return (
            <div className="LeftPage">

                {
                    dataArr.map(item =>
                        <p onClick={() => this.props.handleOnClick(item.id)} >{item.title}</p>
                    )
                }

            </div>
        )
    }
}

export default React.memo(LeftPage)
