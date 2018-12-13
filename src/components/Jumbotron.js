import React,{Component} from 'react'
import './jumbotron.css'
import {Jumbotron,Container,Button} from 'reactstrap';
export default class JumboTron extends Component{
    render(){
        return(
            <div className="koding">
                <center>
                <Jumbotron fluid >
                <Container fluid>
                <h1 className="santren">SANTREN KODING</h1>
                <p>Intensive Coding Bootcamp for Yatim & Dhuafa</p>
                <Button color="success">mulai belajar</Button>{' '}
                </Container>
                </Jumbotron>
                </center>  
            </div>
        );
    }
}