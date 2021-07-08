
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


class Menu extends Component
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
                        <Grid item xs={12} sm={4} data-aos="fade-up">
                        <Card>
                            <CardHeader color="info">
                            <h4 >Alcalde</h4>
                            <p >Información</p>
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >                                
                                        <Typography variant="h6" gutterBottom aling='center'>
                                            ALCALDE : ANTONIO HUAMAN ARIAS                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>

                                          Nació el 12 de junio 1972 en el Sector de Alcayhuarmi - Comunidad Ingata , estudió  en el Colegio de Santo Tomas,
                                          asimismo, posee una amplia experiencia en el sector público, 
                                          fue Sub Gerente de Desarollo Social en LLusco, Trabajo en la Municipalidad de Livitaca, Colquemarca, y 
                                          tambien en la Municipalidad Provincial de Chumbivilcas.                                  
                                         </Typography>  
                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                            <CardFooter>
                                <Link to="/alcalde" >Ver Historia</Link>                               
                            </CardFooter>
                        
                        </Card>
                        </Grid>

                        
                    
                        <Grid item xs={12} sm={4} data-aos="fade-up">
                        <Card>
                            <CardHeader color="info">
                            <h4 >Consejo Municipal</h4>
                            <p >Información</p>
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >
                                <Typography variant="h6" gutterBottom aling='center'>
                                            ALCALDE : ANTONIO HUAMAN ARIAS                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>
                                                  PRESENTAMOS LA LISTA DE REGIDORES    
                                                                        
                                         </Typography>  

                                

                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                            <CardFooter>

                              <Link to="/regidores" >Ver Lista de Regidores</Link>   
                            
                            </CardFooter>
                        
                        </Card>
                        </Grid>

                        <Grid item xs={12} sm={4} data-aos="fade-up">
                        <Card>
                            <CardHeader color="info">
                            <h4 >Identidad Municipal</h4>
                            <p >Información</p>
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >
                                <div className="row">
                                    <div className="col l3 m3 s12">                                             
                                        <ul >
                                             <li>
                                               <Link to="/personal" >Sub-Gerencias Y Personal Encargado</Link>                                                                                                                                                 
                                             </li>
                                             <li>
                                               <Link to="/organigrama" >Organigrama</Link>                                                                                                     
                                            </li>
                                            
                                            <li>
                                               <Link to="/mision" >Misión y Visión</Link>                                                                                                     
                                            </li>
                                            
                                            <li>
                                               <Link to="/historia" >Reseña Histórica</Link>                                                         
                                            
                                            </li>                            
                                            <li>
                                               <Link to="/simbolos" >Simbolos del distrito</Link>                                                                                                     
                                            </li>
                                            <li>
                                               <Link to="/alcaldes" >Alcaldes Electos de la Municipalidad</Link>                                                                                                     
                                            </li>
                                            
                                            
                                        </ul>

                                    </div>
                                </div>
                    

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

export default Menu;
