
import React, { Component } from "react";
import {Slide,Slider,Caption,SideNav,SideNavItem, Icon,Collapsible,CollapsibleItem,Dropdown,Divider } from 'react-materialize';

import M from  'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import { Link } from "react-router-dom";
import { useMediaQuery, Grid, Typography  } from '@material-ui/core';

import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";


class Trabajaperu extends Component
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
            duration: 600,
            height: 300,
            indicators: true,
            interval: 6000
            }}
            
            >
            <Slide image={<img  alt={p1} src={p1} />}>
                <Caption>
                    <h3>
                        Municipalidad Distrital de Chamaca !
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                           Un nuevo comienzo para un fururo mejor
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p2} src={p2} />}>
                <Caption placement="left">
                    <h3>
                        Servicios
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Consulte nuestros servicios en linea
                    </h5>
                </Caption>
            </Slide>
           <Slide image={<img  alt={p3} src={p3} />} >
                <Caption placement="right">
                    <h3>
                     Nosotros.
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                       Estamos para orientarlo 
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p4} src={p4} />}>
                <Caption>
                    <h3>
                        Inciando Obras!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Inicamos hoy mismo .
                    </h5>
                </Caption>
            </Slide>
         </Slider>



                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3} data-aos="fade-up">

                     </Grid>   
                        <Grid item xs={12} sm={6} data-aos="fade-up">
                        <Card>
                            <CardHeader color="warning">
                                 <Typography variant="h6" gutterBottom aling='center'>
                                         Trabaja Perú                                  
                                   </Typography> 
                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >                                
                                        <Typography variant="h6" gutterBottom aling='center'>
                                              Presentación:                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>
                                             El programa Trabaja Perú tiene como objetivo generar empleo temporal destinado a la población en edad de trabajar a partir de 18 años, que se encuentre en situación de pobreza, pobreza extrema, o afectada parcial o íntegramente por desastres naturales o por emergencias.
                                             Bienvenido a la Municipalidad Distrital de Chamaca, aquí trabajamos para promover e impulsar el desarrollo socioeconómico, sostenido y armónico de nuestro distrito. Nuestra gestión trabaja bajo un lineamiento democrático, responsable y participativo que busca impulsar obras de infraestructura básica, mejorando la calidad de vida, contribuyendo a la reducción de la pobreza extrema mediante la iniciación de los recursos y promoviendo la inversión privada y el turismo.
                                             <br/>                                             
                                             
                                             <br/>                                                                                          
                                         </Typography> 

                                         <Typography variant="h6" gutterBottom aling='center'>
                                             Cómo se generan los empleos temporales?                                  
                                        </Typography>  
                                         <Typography variant="body1" gutterBottom aling='center'>
                                            Brindar servicios de calidad con eficiencia y eficacia manteniendo una gestión transparente y responsable que garantice el manejo óptimo de los recursos públicos, promoviendo así el bienestar y desarrollo integral y sostenible de su población de manera participativa e inclusiva.
                                             <br/>                                             
                                             <br/>                                                                                          
                                         
                                         </Typography> 
                                         <Typography variant="h6" gutterBottom aling='center'>
                                         ¿Cómo interviene el Programa?                                
                                        </Typography>  
                                         <Typography variant="body1" gutterBottom aling='center'>
                                             <b>Trabaja Perú tiene dos modalidades de intervención:</b>
                                             <br/>                                             
                                             <b>1.Regular:</b>
                                             <br/>    
                                               Se enfoca en la reactivación económica de los distritos focalizados por el Programa a través de la ejecución de proyectos de inversión o actividades de intervención inmediata intensivas en mano de obra no calificada (MONC).       
                                             <br/>            
                                             <br/>            
                                             <b>2.Por emergencias o desastres naturales:</b>                                                                                                                       
                                             <br/>  
                                                Busca mejorar las condiciones de las personas damnificadas o afectadas por una emergencia o desastre natural que no cuentan temporalmente con capacidades socioeconómicas disponibles para recuperarse. Para ello, se ejecutarán proyectos de inversión o actividades de intervención inmediata intensivas en mano de obra no calificada (MONC).          

                                         </Typography> 
                                         <img className="img-fluid" src={"https://adryan3.sytes.net/ima/trabaja-peru.jpeg"}/>   
                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                           
                        
                        </Card>
                        </Grid>

                       

                                 
                    </Grid>

        
         </div> 
         
    </div>
  );
  }
 }

export default Trabajaperu;
