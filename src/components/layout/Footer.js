import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div   >
   
       <div className="page-footer font-small indigo">
          <div className="container text-center text-md-left"> 
           <div className="row">

                    <div className="col l3 m3 s12">                  
                          <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Servicios</h6>
                          <ul >
                            <li>
                              <a  target='_blank' style={{color:'white' }} href="https://mesadeparteschamaca.sytes.net">Mesa de Partes Virtual</a>
                            </li>
                            <li>
                                <Link style={{color:'white' }}  to="/construccion" >Seguimiento de Documentos MPV</Link>                                                               
                            </li>
                            <li>
                                <Link style={{color:'white' }}  to="/construccion" >Requerimiento Bienes y Servicios</Link>                                                               
                            </li>                            
                            <li>
                                <Link style={{color:'white' }}  to="/construccion" >Licencias de Funcionamiento /Edificaciòn</Link>                                 
                              
                            </li>
                               <Link style={{color:'white' }}  to="/construccion" >Consulta trámite documentario</Link>                                 
                            <li>
                              
                            </li>
                            
                          </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-3 mx-auto">                  
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">SOCIALES</h6>
                            <ul >
                              <li>
                                 <Link style={{color:'white' }}  to="/seguridadciudadana" >Seguridad Ciudadana</Link>                                 
                              </li>
                              <li>
                                 <Link style={{color:'white' }}  to="/doctor" >Doctor en Casa</Link>                                 
                              
                              </li>
                              <li>
                                  <Link style={{color:'white' }}  to="/trabajaperu" >Trabaja Peru</Link> 
                                
                              </li>
                              
                            </ul>
                    </div>

                    <div className="col-md-3 mx-auto">                  
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Su Cuenta</h6>
                            <ul >
                              <li>
                                  <Link style={{color:'white' }}  to="/login" >Ingresar</Link> 
                                
                              </li>
                              <li>
                                 <Link style={{color:'white' }}  to="/register" >Registrarse</Link> 
                                
                              </li>
                              
                            </ul>
                    </div>
                    <div className="col-md-3 mx-auto">                  
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Enlaces de Interes</h6>
                            <ul >

                            
                              <li>
                                <a  target='_blank' style={{color:'white' }} href="https://www.gob.pe/mef" >MEF</a>
                              </li>

                              <li>
                                <a  target='_blank' style={{color:'white' }} href="https://www.sunat.gob.pe/" >Sunat</a>
                              </li>
                              <li>
                                <a  target='_blank' style={{color:'white' }} href="https://www.gob.pe/minjus" >Ministerio de Justicia</a>
                              </li>
                              <li>
                                <a target='_blank' style={{color:'white' }} href="https://www.gob.pe/mimp">Ministerio de la Mujer</a>
                              </li>
                              <li>
                                <a target='_blank' style={{color:'white' }} href="https://www.gob.pe/mincetur">Ministerio de Comercio</a>
                              </li>
                            </ul>
                    </div> 

           </div>

          </div>

         


       </div>
    
          <div className="fafafa black lighten-5   text-black mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} SfSystem
          </div>
    </div> 
  );
};





