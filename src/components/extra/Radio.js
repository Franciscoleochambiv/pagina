
import React, { Component } from "react";
import { Slide, Slider, Caption, SideNav, SideNavItem, Button, Icon, Collapsible, CollapsibleItem, Dropdown, Divider } from 'react-materialize';

import M from 'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import { Link } from "react-router-dom";



class Radio extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    render() {

        return (



            <div className="App">
                <div style={{ paddingTop: "0px" }} >





                    <Slider

                        fullscreen={false}
                        options={{
                            duration: 600,
                            height: 300,
                            indicators: true,
                            interval: 6000
                        }}

                    >
                        <Slide image={<img alt={p1} src={p1} />}>
                            <Caption>
                                <h3>
                                    SfSystem !
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Contacto
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt={p2} src={p2} />}>
                            <Caption placement="left">
                                <h3>
                                    Contacto
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Ubiquenos le dejamos nuestros datos
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt={p3} src={p3} />} >
                            <Caption placement="right">
                                <h3>
                                    Contacto
                                </h3>
                                <h5 className="light grey-text text-lighten-3">

                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt={p4} src={p4} />}>
                            <Caption>
                                <h3>
                                    Ofrecemos Facturación Electronica!
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Empiece hoy mismo .
                                </h5>
                            </Caption>
                        </Slide>
                    </Slider>

                    <div className="container">



                        <h1 className="align center" >
                            Chat de Consultas
                          


                        </h1>


                        <div className="container center">

                            <a  href="https://munichamacachat.sytes.net/" target="_blank" >
                                 <img className="img-fluid" 
                                  src='https://adryan3.sytes.net/upload/file-1637199953149.jpeg'                            
                                                    />
                            </a>
                            
                        </div>




                    </div>
                </div>


            </div>
        );
    }
}

export default Radio;
////<h6>En Vivo</h6>
//<audio ref="audio_tag" src="http://adryan2.sytes.net:8000/;stream.nsv&amp;type=mp3" controls autoPlay />:w