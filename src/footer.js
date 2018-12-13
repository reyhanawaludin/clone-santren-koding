import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <h1>Nama Saya:{this.props.nama}</h1> 
      <h1>Tempat Tanggal Lahir:{this.props.ttl}</h1> 
      <h1>Alamat:{this.props.alamat}</h1> 
      <h1>Cita-cita:{this.props.cita}</h1>                                                         
         </div>
         )
        }
      }
      
      export default Footer;
      