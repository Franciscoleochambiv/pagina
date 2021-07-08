
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


class Seguridadciudadana extends Component
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
                            <CardHeader color="danger">
                                 <Typography variant="h6" gutterBottom aling='center'>
                                         Seguridad Ciudadana                                 
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

                                         <Typography variant="body1" gutterBottom aling='center'>
                                            Desde convenios de colaboración para la elaboración, acompañamiento y monitoreo de Planes Locales de Seguridad Ciudadana; cursos de especialización para alcaldes, secretarios técnicos, especialistas en seguridad ciudadana, integrantes de los comités de seguridad ciudadana, policías y organizaciones vecinales; seguimiento y fiscalización a los principales actores relacionados con la seguridad ciudadana; hasta asesorías para la formación de Juntas Vecinales y Rondas Campesinas.                                            
                                        </Typography>  
                                        <img className="img-fluid" src={"https://adryan3.sytes.net/ima/SEGUR.jpeg"}/>   
                                        
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

export default Seguridadciudadana;
