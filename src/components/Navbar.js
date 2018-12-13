
import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrollexdDropdown,DropdownToggle,DropdownMenu,DropdownItem}from 'reactstrap';
import './navbar.css'


export default class NavBar extends Component{
    render(){
        return(
            <div>
               <Navbar>
                  
                   <NavbarBrand className="mynav" onClick={()=>this.props.changePage("Home")}> Santren Koding</NavbarBrand>
                   
                   <Nav>
                       <NavItem className ="navbarku" onClick={()=>this.props.changePage("Kajian")} >Kajian Koding</NavItem>
                       <NavItem className = "navbarku" onClick={()=>this.props.changePage("Mondok")}>Mondok Koding</NavItem>
                       <NavItem className="navbarku" onClick={()=>this.props.changePage("Kitab")} >Kitab Koding</NavItem>
                       <button className="mye">masuk/daftar</button>
                   </Nav>
               </Navbar>
            </div>
        );
    }
}