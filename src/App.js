import React, { useState } from 'react'
// import React, { component} from 'react'
import InputName from './component/userInput'
import UserOutput from './component/userOutput'
import Sumbit from './component/user-submit'

// use function component
const App = () => {
  const [user, setUser] = useState('')
  const [isInformation, setisInformation] = useState(false)
  const checkInput = (event) => {
    if(user.length === 0 ) {
      alert('Input tidak boleh kosong')
    } else {
      // alert('Input Berhasil')
      setisInformation(true)
  }
}

  return (
    <div className="app">
    <InputName  user={user} changeName={setUser} />
    <Sumbit checkInput={checkInput}/>
    <UserOutput isInformation={isInformation} display={user} />
  </div>
   )

  }

// // use class component
// class App extends Component {
//   // memanggil method constructor
//   constructor(props) {
//     super(props)

//     // membuat state
//     this.state = {
//       user : '',
//       isInformation : false
//     }
//   }

//   changeName = (event) => {
//     this.setState({
//         user : event.target.value
//     })
//   }

//   checkInput = () => {
//     if(this.state.user.length === 0 ) {
//       alert('Input tidak boleh kosong')
//     } else {
//       // alert('Input Berhasil')
//       this.setState({
//         isInformation : true
//       })
//     }
//   }

//   render() {
    

//     return (
//       <div className="app">
//         <InputName  person={this.state.user} changeName={this.changeName} />
//         <Sumbit checkInput={this.checkInput}/>
//         <UserOutput isInformation ={this.state.isInformation} display={this.state.user}/>
//       </div>
//     )
//   }
// }

export default App