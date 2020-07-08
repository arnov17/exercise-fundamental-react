import React, { Component } from 'react'
import InputName from './component/userInput'
import UserOutput from './component/userOutput'
import Sumbit from './component/user-submit'


class App extends Component {
  // memanggil method constructor
  constructor(props) {
    super(props)

    // membuat state
    this.state = {
      user : '',
      isInformation : false
    }
  }

  changePerson = (event) => {
    this.setState({
        user : event.target.value
    })
  }

  checkInput = () => {
    if(this.state.user.length === 0 ) {
      alert('Input tidak boleh kosong')
    } else {
      // alert('Input Berhasil')
      this.setState({
        isInformation : true
      })
    }
  }

  render() {
    

    return (
      <div className="app">
        <InputName  person={this.state.user} changePerson={this.changePerson} />
        <Sumbit checkInput={this.checkInput}/>
        <UserOutput isInformation ={this.state.isInformation} display={this.state.user}/>
      </div>
    )
  }
}

export default App