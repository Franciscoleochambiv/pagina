
import React, { Component } from "react";
//import {Slide,Slider,Caption,SideNav,SideNavItem, Button,Icon,Collapsible,CollapsibleItem,Dropdown,Divider } from 'react-materialize';

//import M from  'materialize-css/dist/js/materialize.min.js';
//import Image from './Image'
import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import p45 from './45.jpg';

import { Link } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from "prop-types";

import  {getShopingByHandle1}  from "../../actions/shopingActions";
import { logoutUser } from '../../actions/authActions';
import ReactPaginate from 'react-paginate';
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";

import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardBody from "../Card/CardBody.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";

import { red } from '@material-ui/core/colors';


import Cateblog1 from './detblog/Cateblog1';

import Posts from '../posts/Posts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";



class BlogCat extends Component
 {


    constructor(){
        super();
        this.state={
            search:'',
            currentPage: 1,
            todosPerPage:5,
            selectedPage: 1    

        }
         
    this.searchHandler=this.searchHandler.bind(this);
    this.seleccion = this.seleccion.bind(this);
    
    
    
    }


    componentDidMount() {
  //      let sidenav = document.querySelector('#slide-out');
   //     M.Sidenav.init(sidenav, {});


        //this.props.getCurrentShoping();

        if (this.props.match.params.handle) {
          this.props.getShopingByHandle1(this.props.match.params.handle);
        }





      }

      searchHandler(event){
        const lolo = event.target.value.toUpperCase();
        this.setState({search: lolo});
        this.setState({
          selectedPage: 1,
         currentPage: Number(1)
        })
       }


  
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  handlePageClicked = data => {
    let selected = data.selected;
    this.setState({
      selectedPage: selected,
      currentPage: Number(selected+1)
    })
  };


  seleccion(event) {
    event.preventDefault();
    let op =event.target.value;
   // console.log(op)

    this.setState({todosPerPage: op});
  };




      
  render(){ 

    

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow:1,
      //	maxWidth:345,
      },
      root2: {
        maxWidth:900,
      },
      media: {
        height: 0,
        paddingTop: '56.25%',
      },
      expand:{
        transfrfom : 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
           duration: theme.transitions.duration.shortest,
        }),
      },
      avatar: {
        backgroundColor: red[500],
     
       },
      expandOpen: {
       transform: 'rotate(180deg)',
      },
      
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
    }));
    const classes = useStyles;

      
    const { shopingfiles, loading } = this.props.shopingfile;
    const { isAuthenticated, user } = this.props.auth;


    const { currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(shopingfiles.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }


    let filteredContacts = shopingfiles.filter(
        (task) =>{
            let poetName = task.name.toUpperCase()+task.description.toUpperCase();
            let separador=" "; 
            let i;
            let poetName1=this.state.search.split(separador);
            let tpalabras=poetName1.length;    
            let datopa;  
            if (tpalabras>3){
                return  poetName.indexOf(this.state.search) !== -1;    

              }
            else{

                  for (i=0;i<tpalabras;i++) {
                    //console.log("recorriendo el aray")
                    //  console.log(poetName1[i]); 
                      datopa=poetName1[i];
                      //datopa=datopa+" "+datopa;
                      return poetName.indexOf(datopa) !== -1 ;
                    //  datopa=poetName1[i];
                    //  return poetName.indexOf(datopa) !== -1 ;
                  

                    }
                    return poetName;
                  }
            } //FIN EDL FUNCION MAP
        
      );

      const Pagination = (
        <ReactPaginate 
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(filteredContacts.length / todosPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClicked}
          containerClassName={'pagination pagination justify-content-center ' }
          subContainerClassName={' page-item page-link badge badge-primary'}
          activeClassName={'active'}
          
          />      
      )

    //console.log(shopingfiles)

    let dashboardContent,dashboardContent1;
    const currentTodos = filteredContacts.slice(indexOfFirstTodo, indexOfLastTodo);




    if (Object.keys(this.props.shopingfile).length > 0) {
        dashboardContent = (          
                currentTodos.map(l1 => (
                  <Card className={classes.root2}>  
                    
                    
                    <section className="view intro-video">    
                       
                                <div className="hm-gradient">
                                <div className="full-bg-img">
                                    <div className="container flex-center">
                                    <div className="row pt-5 mt-3">
                                        

                                        <div className="col-lg-12 wow fadeIn">
                                          
                                            <h3 className="align center"><b>{l1.name}</b></h3>
                                        
                                        

                                        {l1.popular &&

                                        <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                                            
                                         <iframe class="embed-responsive-item" src={l1.imageUrls}
                                            allowfullscreen></iframe>    
                                        </div>

                                       ||

                                        <img className="img-fluid" src={l1.imageUrls}/>  

                                        }

                                        </div>
                                        <div className="col-lg-12 wow fadeIn mb-5 text-center text-lg-left">
                                        <div className="black-text">

                                            <p  className="text-justify">{l1.description.substring(0, 300)} . . .</p>
                                            
                                            <a >
                                               <Link to={`/detblog/${l1._id}` } className="btn btn light-blue darken-2">Leer Mas</Link>   

                                            </a>
                                            

                                            

                                                                            
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                               
                   </section>

                   </Card>	
                
                



                        ))     
                        ); 
                        
                        
                    dashboardContent1 = (          
                            currentTodos.map(l1 => (
                                <ul className="todo-list">  
                                <li>                        
                                    <div className="icon">
                                        
                                    
                                    <div >
                                        <a style={{textAlign:"center"}}>

                                        <Link to={`/detblog/${l1._id}` } >{l1.name}</Link>   
                                          
                                        </a>

                                     </div>   
                                   
                                    
                                   
                                    </div>
                                </li>
                            </ul>     
                                                   )
                                                  )
                           )
                             
    }
    else{
      dashboardContent = (          
              <div>
                <p className="lead text-muted">Bienvenido </p>
                <p>Aún no ha configurado un perfil, por favor agregue alguna información.</p>                  
              </div>
        );         
      }      









    
  return (
 
    <div className={classes.root}>
      <Grid container spacing={3}>
                    <Grid item xs={12} >
                    <Link to="/blog" className="btn btn-info btn-light  light-blue darken-2">                
                                    Ir a Publicaciones
                                  </Link> 
                           
                          <Paper elevation= {0} className={classes.paper}>
                           <Card>
                                          <CardHeader color="primary">
                                          <h5 >Publicaciones Municipalidad Distrital de Chamaca</h5>                            
                                          </CardHeader> 
                          </Card>               
                            
                            <aside class="social-sharing">
                          <ul className="menu-social">
                              <li className="social-item"><a href="http://twitter.com/intent/tweet?text=SiloCreativo&url=https://www.silocreativo.com/en/" target="_blank"><span class="screen-reader-text">Twitter1</span></a></li>
                              <li className="social-item"><a href="http://www.facebook.com/sharer.php?u=https://www.silocreativo.com/en/&t=SiloCreativo" target="_blank"><span class="screen-reader-text">Facebook</span></a></li>                 
                              <li className="social-item"><a href="whatsapp://send?text=https://web.whatsapp.com/" data-action="share/whatsapp/share"><span class="screen-reader-text">Whatsapp</span></a></li>
                                                                  
                          </ul>
                        </aside>
                        </Paper>
                      </Grid>
                  
                      <Grid item xs={12} sm={3}>
                                 <Paper elevation= {0} className={classes.paper}>
                                 
                                  <Card>
                                      <CardHeader color="info">
                                      <h4 >TRABAJA PERÚ</h4>                            
                                      </CardHeader>                                                
                                      <CardBody>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} >                                 
                                                     <img className="img-fluid" src={"https://adryan3.sytes.net/ima/trabaja-peru.jpeg"}/>                                                                                                                                                                       
                                                        <Typography variant="body1" gutterBottom aling='center'>
                                                            <Link style={{color:'#a22c58' }} className="nav-link" to="/trabajaperu">
                                                                    TRABAJA PERÚ
                                                            </Link>   
                                                        </Typography>  
                                                </GridItem>                            
                                            </GridContainer>                                        
                                      </CardBody>                                                    
                                  </Card>

                                  <Card>
                                      <CardHeader color="primary">
                                      <h4 >Doctor Chamaca</h4>                            
                                      </CardHeader>                                                
                                      <CardBody>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} > 
                                                        <img className="img-fluid" src={"https://adryan3.sytes.net/ima/DR-CHAMACA.jpeg"}/>                                                                                                                                        
                                                        <Typography variant="body1" gutterBottom aling='center'>
                                                              <Link style={{color:'#a22c58' }} className="nav-link" to="/doctor">
                                                                DOCTOR CHAMACA
                                                              </Link>   
                                                              
                                                        </Typography>  
                                                </GridItem>                            
                                            </GridContainer>                                        
                                      </CardBody>                                                    
                                  </Card>
                                  <Card>
                                      <CardHeader color="danger">
                                      <h4 >Seguridad Ciudadana</h4>                            
                                      </CardHeader>                                                
                                      <CardBody>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} >  
                                                  <img className="img-fluid" src={"https://adryan3.sytes.net/ima/SEGUR.jpeg"}/>                                                                                                                                                                       
                                                        <Typography variant="body1" gutterBottom aling='center'>
                                                                <Link style={{color:'#a22c58' }} className="nav-link" to="/seguridadciudadana">
                                                                  SEGURIDAD CIUDADANA
                                                              </Link>   
                                                                
                                                        </Typography>  
                                                </GridItem>                            
                                            </GridContainer>                                        
                                      </CardBody>                                                    
                                  </Card>

                                  <Card>
                                      <CardHeader color="success">
                                      <h4 >CORONAVIRUS COVID19 RE INFECCIÓN: podemos re-infectarnos? </h4>                            
                                      </CardHeader>                                                
                                      <CardBody>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} >                                 
                                                <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                                                      
                                                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/TI0dXG47Baw"
                                                                            allowfullscreen></iframe>    
                                                  </div>                                                   
                                                        <Typography variant="body1" gutterBottom aling='center'>
                                                                          INFORMACION SOBRE LA COVID-19
                                                        </Typography>  
                                                </GridItem>                            
                                            </GridContainer>                                        
                                      </CardBody>                                                    
                                  </Card>
                                          
                                    
                                </Paper>
                            </Grid> 


                            

                            <Grid item xs={12} sm={6}>
                                 <Paper elevation= {0} className={classes.paper}>
                                    <div className="container">
                                       <input type ="text"  name="buscar" className="form-control" placeholder="Buscar en las publicaciones" onChange={this.searchHandler} value={this.state.search}  />                                 
                                    </div>    
                                         

                                

                                {dashboardContent}
                                </Paper>
                            </Grid> 

                            <Grid item xs={12} sm={3}>
                            <Paper elevation= {0} className={classes.paper}>
                                 
                                 <h5 style={{backgroundColor:"red",color:"white"}}>Categorias</h5>
                                   <Cateblog1 />
                                   <center>
                                      <h3>Lo mas Leido</h3>
                                   </center>
                                      <h5 style={{backgroundColor:"red",color:"white"}}>Ultimas 5 Noticias</h5>
                                      
                                    
                                  <div   >                             
                                  <select  className="form-control" style={{"colo":"red"}}  value={this.todosPerPage} onChange={this.seleccion}>
                                    <option  style={{"colo":"red"}}value="5">
                                    5
                                    </option>
                                    <option value="10">
                                    10
                                    </option>
                                    <option value="25">
                                    25
                                    </option>
                                    <option value="50">
                                    50
                                    </option>
                                    <option value="100">
                                    100
                                    </option>
                                    <option value={filteredContacts.length }>
                                    Todos
                                    </option>
                                  </select>                   
                                </div> 
                                <br></br>
                                {dashboardContent1}


                                 </Paper>
                                 
                            </Grid>  
                            <Grid item xs={12} sm={12}>
                                <Paper elevation= {0} className={classes.paper}>
                                <div className="col-lg-12 wow fadeOut">

                                      <center>
                                              <p>Numero de Coincidencias encontradas {filteredContacts.length}</p>
                                      </center>     
                                      {Pagination}



                                      <img className="img-fluid" src={p45}/> 


                                      <center> 

                                      { isAuthenticated ? <Posts /> : <h3>Para Realizar Comentarios Ingrese a su Cuenta</h3> }
                                      </center>      


                              </div>


                                </Paper>
                            </Grid>
                            
                                

                   
           
          </Grid>
         
    </div>
  );
  }
 }



BlogCat.propTypes = {
  getShopingByHandle1: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
     auth: PropTypes.object.isRequired,
   
  
  };

 const mapStateToProps = state => ({
    shopingfile: state.shopingfile,  
    errors: state.errors,
    auth: state.auth
  }
  );

  export default connect(mapStateToProps, { getShopingByHandle1, logoutUser  })(
    BlogCat
  );
  

