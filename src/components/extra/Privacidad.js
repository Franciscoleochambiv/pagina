
import React, { Component } from "react";
import {Slide,Slider,Caption,SideNav,SideNavItem, Button,Icon,Collapsible,CollapsibleItem,Dropdown,Divider } from 'react-materialize';

import M from  'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import { Link } from "react-router-dom";



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
                        SfSystem !
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                           Privacidad 
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p2} src={p2} />}>
                <Caption placement="left">
                    <h3>
                        Privacidad
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Politicas de Privacidad
                    </h5>
                </Caption>
            </Slide>
           <Slide image={<img  alt={p3} src={p3} />} >
                <Caption placement="right">
                    <h3>
                       Privacidad
                    </h3>
                    <h5 className="light grey-text text-lighten-3">

                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img  alt={p4} src={p4} />}>
                <Caption>
                    <h3>
                       Politicas de privacidad                      
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
  
                    </h5>
                </Caption>
            </Slide>
         </Slider>

         <div className="container">

                        <h1 className="align center" >
                            Privacidad

                        </h1>


                        <h6 className="align left" >
                         
                            

                        </h6>
                        <p className="font-weight  text mt-3 mb-4 text-justify">  
                        Pol??tica de privacidad de datos
                        Identidad y direcci??n del responsable del fichero donde se encuentran sus datos
                        En virtud de la Ley Org??nica 15/1999, de 13 de diciembre, Protecci??n de Datos de Car??cter Personal, Zimrre D. Sedano Javier con domicilio social en Estambul N3 1A 41007Sevilla-Espa??a (de ahora en adelante el Responsable del Fichero), le informa que al introducir sus datos a trav??s de los formularios electr??nicos de nuestra web nos suministrar?? determinados datos de car??cter personal que se tratar??n de forma automatizada e incorporar??n a los correspondientes ficheros de los que Zimrre D. Sedano Javier es titular y Responsable.
                        <br>
                        </br>
                        <br>
                        </br>

                        Finalidad del tratamiento de sus datos
                        <br>
                        </br>
                        La recogida y tratamiento automatizado de sus datos personales tiene como finalidad hacerle participar en los concursos y promociones que ofrecemos a trav??s de nuestra web www.zimrre.com as?? como recibir nuestro Newsletter si as?? lo desea. Por la presente, usted consiente el tratamiento de sus datos con el fin de ser utilizados para el env??o de promociones publicitarias y prospecci??n comercial a trav??s de cualquier medio, incluyendo por v??a electr??nica, por la empresa Zimrre D. Sedano Javier y otras relacionadas con los sectores de las telecomunicaciones, financiero, ocio, formaci??n, gran consumo, automoci??n y energ??a.
                        <br>
                        </br>
                        <br>
                        </br>
                        

                        Derechos de acceso, rectificaci??n y cancelaci??n
                          <br>
                        </br>
                        En todo momento podr?? ejercitar su derecho de acceso, rectificaci??n, cancelaci??n y oposici??n enviando su solicitud escrita y firmada dirigida al Departamento Legal de Zimrre D. Sedano Javier acompa??ando fotocopia de su DNI a la direcci??n postal arriba indicada o bien a la siguiente direcci??n de correo electr??nico info@zimrre.com . Asimismo, en cualquier momento podr?? revocar el consentimiento arriba prestado para la cesi??n de sus datos personales y la recepci??n de comunicaciones comerciales enviando una comunicaci??n en este sentido a la direcci??n de correo electr??nico indicando la palabra ???Baja??? en el asunto a la direcci??n de correo electr??nico arriba referenciada.
                        <br>
                        </br>
                        <br>
                        </br>

                        Cesi??n
                        <br>
                        </br>
                        Si usted es premiado en alguno de nuestros concursos o promociones, autoriza la publicaci??n de sus datos personales en nuestra Web y en los perfiles sociales de Zimrre D. Sedano Javier de Facebook, Youtube, Twitter, Instagram, Google y Pinterest a efectos de anunciar quien ha sido la persona ganadora. Asimismo, usted consiente la comunicaci??n de sus datos a proveedores externos de Zimrre D. Sedano Javier relacionados con los sectores de las telecomunicaciones, financiero, ocio, formaci??n, gran consumo, automoci??n y energ??a, a fin de ser utilizados para el env??o de promociones publicitarias y prospecci??n comercial.

                        </p>
                       
                        
           </div>  
         </div> 
         
    </div>
  );
  }
 }

export default Contacto;
