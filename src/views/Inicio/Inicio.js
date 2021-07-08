import React, { Component } from "react";
import {Slide,Slider,Caption,SideNav,SideNavItem, Icon,Collapsible,CollapsibleItem,Dropdown,Divider } from 'react-materialize';

import M from  'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './1.jpg';
import p2 from './2.jpg';
import p3 from './3.jpg';
import p4 from './4.jpg';
import { Link } from "react-router-dom";

//import Button from "../CustomButtons/Button.js";



class Inicio extends Component
 {

    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
      }

  render(){    
    
  return (
      

 
    <div className="App">  
    <div  style={{paddingTop:"0px"}} > 
       

        

            
            <Slider

fullscreen={false}
options={{
  duration: 500,
  height: 600,
  indicators: true,
  interval: 6000
}}
            
            >
            <Slide image={<img  alt={p1} src={p1} />}>
                <Caption>
                    <h1 >
                      Municipalidad Distrital de Chamaca!
                    </h1>
                    <h5  > 
                        Un Nuevo Comienzo para un Futuro mejor
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p2} src={p2} />}>
                <Caption placement="left">
                    <h3>
                        Diseño e Implemetación
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Nuestros Organizaciones.
                    </h5>
                </Caption>
            </Slide>
           <Slide image={<img  alt={p3} src={p3} />} >
                <Caption placement="right">
                    <h3>
                      Inagurando .
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Obras Recientes                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p4} src={p4} />}>
                <Caption>
                    <h3>
                       Inicando Actividades!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Empezamos  hoy mismo .
                    </h5>
                </Caption>
            </Slide>
         </Slider>

         <h6 className="align center" >
             Municipalidad Distrital de Chamaca

         </h6>
         <h5 className="align center"  >
												Chamaca -Chumbivilcas-Cusco

         </h5>

         <h6 className="align center" >
                    Un Nuevo Comienzo para un futuro Mejor									</h6> 

         <br></br>
         <br></br>
         </div> 
         
    </div>
  );
  }
 }

export default Inicio;



