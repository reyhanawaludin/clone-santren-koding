
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Kajian from './pages/Kajian'
import NavBar from './components/Navbar'
import Kitab from './pages/Kitab'
import Mondok from './pages/Mondok'
import Tata from './components/Card'


class App extends Component {
  state = {
    isPage : "Home"
  }

  changePage =(page)=>{
    this.setState({
      isPage : page
    })
  }


  render() {
    if(this.state.isPage === "Home"){
      return (
        <div>
          <NavBar changePage={this.changePage} />
          <Home/>
          
        </div>
      )
    }else if(this.state.isPage === "Kajian"){
      return (
        <div>
          <NavBar  changePage={this.changePage} />
          <Kajian />    
       </div>
      )
    }
    else if(this.state.isPage === "Kitab"){
      return(
        <div>
          <NavBar changePage={this.changePage}/>
          <Kitab/>
        </div>
      )
    }
    else if(this.state.isPage === "Mondok"){
      return(
        <div>
          <NavBar changePage={this.changePage}/>
          <Mondok/>
        </div>
      )
    }

  }
}

export default App;