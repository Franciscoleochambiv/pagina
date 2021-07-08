
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


class Personal extends Component
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
                    
                        <Grid item xs={12} sm={6} data-aos="fade-up">
                        <Card>
                            <CardHeader color="warning">
                                 <Typography variant="h6" gutterBottom aling='center'>
                                         Gerencia  y Sub Gerencias 
                                   </Typography> 
                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >                    
                                        <Typography variant="h6" gutterBottom aling='center'>
                                              GERENTE GENERAL
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                ABOG. EDGAR AEDO CRUZ 
                                             <br/>                                             
                                             <br/>                                                                                          
                                         </Typography>             
                                        <Typography variant="h6" gutterBottom aling='center'>
                                              Sub Gerencias de Infraestrucctura y Desarrollo Urbano Rural:                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                ING. CARLOS HOSMEL VALDEZ MAROCHO
                                             <br/>                                             
                                             <br/>                                                                                          
                                         </Typography> 
                                         <Typography variant="h6" gutterBottom aling='center'>
                                              Sub Gerencias de Desarrollo Económico Local:                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                M.V.P. WILMER CASTRO NUÑONCA
                                             <br/>                                             
                                             <br/>                                                                                          
                                         </Typography> 
                                         <Typography variant="h6" gutterBottom aling='center'>
                                              Sub Gerencias de Desarrollo Social:                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                ING. GILMER QUISPE HUAMAN
                                             <br/>                                             
                                             <br/>                                                                                                                                       
                                         </Typography> 
                                         <Typography variant="h6" gutterBottom aling='center'>
                                              Sub Gerencias de Gestgión Ambiental y Saneamiento:                                    
                                        </Typography> 
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                LIC. HEMERZON SALCEDO CADENA
                                             <br/>                                             
                                             <br/>                                                                                                                                       
                                         </Typography> 


                                         
                                </GridItem>                            
                            </GridContainer>                                        
                            </CardBody>
                           
                        
                        </Card>
                        </Grid>


                        <Grid item xs={12} sm={6} data-aos="fade-up">
                        <Card>
                            <CardHeader color="primary">
                                 <Typography variant="h6" gutterBottom aling='center'>
                                         Personal Encargado
                                   </Typography> 
                            
                            </CardHeader>
                        
                        
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} >                    
                                        
                                        <Typography variant="body1" gutterBottom aling='center'>                                                                                          
                                             <br/>                                                                                          
                                                <b>ABOG. LADIMIRO YAHURA ARENAS </b> - Procurador Público Municipal
                                             <br/>
                                                <b>BACH. CRISPIN LUNA ÑAUPA </b> - Secretario General                                                                                            
                                             <br/>                                                                                         
                                                <b>ABOG. HILLARY HELEN CUNZA MAINCITA </b> - Asesor Legal
                                             <br/>                                                                                         
                                                <b>CPC: HUGO FLORES ORCON </b> - Encargado de Planeamiento y Presupuesto                                             
                                             <br/>                                            
                                                <b>CPC: DEIKER GUIDO URQUIZO LOVATON </b> - Jefe de la Oficina de Contabilidad
                                             <br/>                                            
                                                <b>BACH. LEONEL EVANS CHUQUIMANTARI ROSALES </b>- Jefe de la Oficia de Logistica y Bienes Patrimoniales
                                             <br/>                                            
                                                <b>ECON. SUMAQ Q. GALLEGOS HUILLCCACURI </b>- Jefe de la Ofician de Programación Multianual de Inversiones
                                             <br/>                                            
                                                <b>CPC: ROSY ELIZABETH CRUZ GOMEZ </b>- Jefe de la Oficina de Tesoreria
                                             <br/>                                            
                                                <b>ABOG. ANA MARIA TAIRO LOAYZA </b>- Jefe de Patrimonio y Archivo Central
                                             <br/>                                                                                         
                                                <b>ECON. YAKELIN RAMIREZ CASTRO </b>- Jefe de la Oficina de Unidad Formuladora
                                             <br/>                                                                                         
                                                <b>ING . BECKER JULIO BUSTINZA HERRERA </b>- Jefe de la Supervición Formulación y Liquidación de Obras
                                             <br/>                                                                                         
                                                <b>SR. FRANCISCO LEO CHAMBI VILCA </b>- Jefe de la Oficina de Informática y Sistemas
                                             <br/>                                                                                         
                                                <b>ING. HUGO REYNALDO TRONCOSO GUEVARA </b>- Jefe de Defenza Civil
                                             <br/>                                                                                         
                                                <b>ABOG. LUZ Y MAR CUSI MEDRANO </b>- Responsable de Demuna
                                             <br/>                                                                                         
                                                <b>SR. ELVIS AVELARDO HULLPA TIQUE </b>- Responsable de la Oficina de Relaciones Públicas                                                
                                             <br/>                                                                                         
                                                <b>SR. JORGE MILTON CRUZ HUAMANI </b>- Responsable de Almacen
                                             <br/>                                                                                         
                                               <b>TEC. YASMANI MONTESINOS POCCO</b>- Responsable de ULE-SISFOH                                                
                                             <br/>                                                                                         
                                               <b>ABOG. CESAR AUGUSTO PEÑA CCAHUANA </b> - Jefe de la Oficina de Recursos Humanos.
                                             <br/>                                                                                         



                                         </Typography>             
                                        
                                         
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

export default Personal;
