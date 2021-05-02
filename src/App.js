import React, { Component } from 'react'
import LeftPage from './Components/LeftPage/LeftPage'
import "./App.css"
import dataArr from "./dataArr"
import RightPage from './Components/RightPage/RightPage'

class App extends Component {
  state = {
    displayData: ''
  }

  handleClick = (id) => {
    alert(id)
    var filteredData = dataArr.filter(item => item.id === id)
    this.setState({ displayData: filteredData[0] })
    // console.log(filteredData)
  }




  render() {
    return (
      <div className="App">
        <LeftPage
          handleOnClick={this.handleClick}
        />

        <RightPage
          dispData={this.state.displayData}
        />
      </div>
    )
  }
}

export default App
