
import React, { Component } from "react";
import {Slide,Slider,Caption,SideNav,SideNavItem, Button,Icon,Collapsible,CollapsibleItem,Dropdown,Divider } from 'react-materialize';

import M from  'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import { Link } from "react-router-dom";

import { Grid, Typography  } from '@material-ui/core';
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";



import CardMedia from '@material-ui/core/CardMedia';



class Contacto extends Component
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
                        Municipalidad Distrital de Chamaca!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                           Contacto 
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p2} src={p2} />}>
                <Caption placement="left">
                    <h3>
                        Contacto
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Ubiquenos le dejamos nuestros datos
                    </h5>
                </Caption>
            </Slide>
           <Slide image={<img  alt={p3} src={p3} />} >
                <Caption placement="right">
                    <h3>
                       Contacto
                    </h3>
                    <h5 className="light grey-text text-lighten-3">

                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p4} src={p4} />}>
                <Caption>
                    <h3>
                        Iniciando Obras!
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
                            <CardHeader color="warning">
                            <h4 >Alcalde</h4>                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >                                
                                        <Typography variant="h6" gutterBottom aling='center'>
                                            ALCALDE : ANTONIO HUAMAN ARIAS                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>
                                                          Gestion 2019-2022  
                                         </Typography>  
                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>                            
                        
                        </Card>
                        </Grid>

                        
                    
                        <Grid item xs={12} sm={4} data-aos="fade-up">
                        <Card>
                            <CardHeader color="info">
                            <h4 >Escriba a Nuestro Correo</h4>                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >
                                  <Typography variant="h6" gutterBottom aling='center'>
                                            LISTA DE CORREOS                                  
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>
                                              munichamacamesadepartes@gmail.com
                                            <br/>

                                        </Typography>  

                                

                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                            
                        
                        </Card>
                        </Grid>

                        <Grid item xs={12} sm={4} data-aos="fade-up">
                        <Card>
                            <CardHeader color="primary">
                            <h4 >Ubicanos</h4>                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >
                                <Typography variant="body1" gutterBottom aling='center'>
                                       
                                       Direccion : CAL. CONCEPCION S/N CUSCO Chamaca
                                       <br/>                                       
                                       Chumbivilcas-Cusco
                                       <br/>                                       
                                       Atención: 
                                       <br/>                                       
                                         * Lunes a Jueves : 8:00 am a 1:00 pm - 2:00 pm a  5 pm
                                         * Viernes : 8:00 am a 3:00 pm 
                                       <br/> 
                                        
                                </Typography> 

                                

                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                        
                        
                        </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} data-aos="fade-up">
                        <Card>
                           
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={4} > 
                                    <img className="img-fluid" src='https://adryan3.sytes.net/upload/ubi.jpeg'/>  
                                 </GridItem>                            
                                 <GridItem xs={12} sm={4} > 
                                    <img className="img-fluid" src='https://adryan3.sytes.net/ima/POBLCACCC.jpeg'/>  
                                 </GridItem>                            
                                 <GridItem xs={12} sm={4} > 
                                    <img className="img-fluid" src='https://adryan3.sytes.net/upload/ubi.jpeg'/>  
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

export default Contacto;
