//import React from "react";
import React, { Component } from "react";


import PropTypes from "prop-types";
import { connect } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {
  getCurrentTiposql,deleteCurrentTiposql,updateCurrentTiposql  
} from "../../actions/tipoActions";
import ReactPaginate from 'react-paginate';

import Input from "@material-ui/core/Input";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Spinner from "../../components/common/Spinner";
import Modal from '../../components/Modal/Modal.js';
import Button from "../../components/CustomButtons/Button.js";
import CardFooter from "../../components/Card/CardFooter.js";



const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

//const useStyles = makeStyles(styles);

class ViewTip extends Component {


  constructor(){
    super();
    this.state={
      tipoData:[],
      id:"",
      name:"",
      category:"",
      price:"",
      description:"",
      popular:"",
      imageUrls:"",
      id_:"",      
      search:'',
      currentPage: 1,
      todosPerPage:5,
      selectedPage: 1,    
      isOpen: false   
     
    };
    this.searchHandler=this.searchHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal= this.toggleModal.bind(this);   
    this.onChange = this.onChange.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);
    this.seleccion = this.seleccion.bind(this);
    this.ordenac = this.ordenac.bind(this);
  }
  

  toggleModal = (id,cod,des) => {
    this.setState({
      isOpen: !this.state.isOpen,
      id_:id,
      codigo:cod,
      descripcion:des      
    }); 
   }   
 
   toggleModalfin = () => {
     this.setState({
       isOpen: !this.state.isOpen      
     });
   }

   onSubmit(e) {
    e.preventDefault();
    const tipoData = {
      descripcion: this.state.descripcion,
      codigo: this.state.codigo,
    
    };
    this.props.updateCurrentTiposql(this.state.codigo,tipoData);
    this.toggleModalfin();

   }


  onChange(e) {
   // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
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
    this.setState({todosPerPage: op});
  };


  ordenac(columna) {
    let oc =columna;
    alert(oc);
  
  }; 


  searchHandler(event){
    const lolo = event.target.value.toUpperCase();
    this.setState({search: lolo});
    this.setState({
      selectedPage: 1,
     currentPage: Number(1)
    })
   }
  
   handleChange(e){
     const {name,value}= e.target;
     this.setState({
       [name]:value
     })
   }

  onDeleteClick(id) {
    this.props.deleteCurrentTiposql(id);
    }

 

  componentDidMount() {
     this.props.getCurrentTiposql();
    }

 
 render(){
  
  const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };
  
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  //const useStyles = makeStyles(styles);
  
  const classes = useStyles;

  const { tipofiles, loading } = this.props.tipofile;
            const { currentPage, todosPerPage } = this.state;
            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;            
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(tipofiles.length / todosPerPage); i++) {
              pageNumbers.push(i);
            }
            let filteredContacts = tipofiles.filter(
              (task) =>{
                  let poetName = (task.codigo.toString()).toUpperCase()+task.descripcion.toUpperCase();
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
                          datopa=poetName1[i];             
                          return poetName.indexOf(datopa) !== -1 ;             
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
                  containerClassName={'react-paginate ul'}
                  subContainerClassName={'react-paginate li'}
                  activeClassName={'active'}
          
  
                  
                  />      
                 )

                 const currentTodos = filteredContacts.slice(indexOfFirstTodo, indexOfLastTodo);
                 let dashboardContent;
                 let edicion;          
                 if (filteredContacts === null || loading) {
                   dashboardContent = <Spinner/>;
                 } else {              
                    if (this.state.isOpen){
                       edicion =(
                        <div >   
                          
                          <Modal  isOpen={this.state.isOpen}> 
     
                           
                          <Card>                   
                            <CardHeader color="primary">
                               
                               <h4 className={classes.cardTitleWhite}>Edicion Tipos</h4>
                               
     
                             <form  onSubmit={this.onSubmit}>  
                             <CardBody>
                                 
                                   <div className="p-col-12 p-lg-12">                
                                         <div className="p-grid">
                                           
                                             <GridContainer>
                                               <GridItem xs={12} sm={12} md={5}>    
                                                <label for="codigo">Codigo</label>
                                                   <input className="p-inputtext p-component"
                                                    placeholder="id "
                                                    value={this.state.codigo}
                                                    name="codigo"
                                                    onChange={this.onChange}                                  
                                                 />                                
                                                 </GridItem>  
                                             </GridContainer>
                                        
     
                                             <GridContainer>
                                               <GridItem xs={12} sm={12} md={5}>   
                                            
                                                 <label for="descripcion">Descripcion</label>
                                                    <input className="p-inputtext p-component"
                                                     name="descripcion"
                                                     placeholder="name"
                                                     value={this.state.descripcion}
                                                     onChange={this.onChange} 
                                                    />
                                               </GridItem>  
                                             </GridContainer>                                                                                                               
                                                                       
                                         </div>  
                                                
                                   </div> 
                                   <div className="p-col-12 p-nogutter">
                                       <div className="p-grid">                       
                                           <div className="p-col-12 p-lg-12">                                              
                                              <div className="p-grid">
                                                  <div className="p-col-12 p-md-6" style={{textAlign:'center'}}>
                                                  
                                                
                                                
                                                      <Button color="white" type="submit" >Editar</Button>
                                                      <Button color="white" type="button" onClick={() => this.setState({isOpen:false})} >Cancelar</Button>
                                                      
                                                   </div>                                                                                                                
                                              </div>     
                                           </div>                                                 
                                       </div>  
                                   </div> 
                             </CardBody>      
                             </form>  
                             </CardHeader>                          										 
                           </Card> 
                           
                        </Modal>
                      
                      </div>
                              );
                     }                
                 if (Object.keys(this.props.tipofile).length > 0) {
                   dashboardContent = (          
                   currentTodos.map(l1 => (
     
                     
                         <TableRow key={l1.codigo} className={classes.tableBodyRow}>
                            
                            <TableCell className={classes.tableCell}>{l1.codigo}</TableCell>        
                            <TableCell className={classes.tableCell}>{l1.descripcion}</TableCell>        
                            <TableCell className={classes.tableCell}>
                                 <button type="button"  onClick={this.toggleModal.bind(this,l1.id,l1.codigo,l1.descripcion)} className="btn btn-primary  01579b light-blue darken-2"  >Editar</button>                                         
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                                 <button type="button" className="btn btn-danger   01579b red darken-2" onClick={this.onDeleteClick.bind(this,l1.codigo)} >Borrar</button>                          
                            </TableCell>
                            
                            
                          </TableRow>    
                           
     
     
     
                                       ))     
                                       );        
                     }
                   else{
                     dashboardContent = (          
                             <div>
                               <p className="lead text-muted">Bienvenido </p>
                               <p>Aún no ha configurado un perfil, por favor agregue alguna información.</p>                  
                             </div>
                       );         
                     }      
            } //FIN DEL RENDER
  
   return( 
    <GridItem xs={12} sm={12} md={12}>
    <GridContainer>
             <select  className="form-control" style={{"colo":"red"}}  value={this.todosPerPage} onChange={this.seleccion}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <option  style={{"colo":"red"}}value="5">
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
                <Input type ="text"  name="buscar" className="form-control" placeholder="Ingrese cadena A Buscar" onChange={this.searchHandler} value={this.state.search}  /> 
                <Card style={{overflow: "scroll",overflow: "auto"}}>
          
          <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}> 

                  <TableContainer component={Paper}>
                       <Table className={classes.table} aria-label="customized table">            
                    
                            <TableHead >
                                <TableRow className={classes.tableHeadRow}>
                                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Codigo</TableCell>
                                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Descripcion</TableCell>
                                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Modificaiones</TableCell>
                                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Eliminaciones</TableCell>
                               </TableRow>                   
                             </TableHead>
                            
                             <TableBody>

                                {dashboardContent}
                               
                             </TableBody>  

                       </Table>
    </TableContainer>                            
                </GridItem>
                <GridItem xs={12} sm={12} md={12}> 
                  {Pagination} 
                </GridItem>

            </GridContainer> 
        </CardBody>  

        <CardFooter>
            <p className={classes.cardCategoryWhite}>           
            Numero de Coincidencias encontradas {filteredContacts.length}
            </p>
            
         </CardFooter>
    </Card> 
  
     
      
    </GridContainer>
    </GridItem>

   )
 }

}

ViewTip.propTypes = {
  getCurrentTiposql : PropTypes.func.isRequired,
  deleteCurrentTiposql: PropTypes.func.isRequired,
  updateCurrentTiposql: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  tipofile: state.tipofile,  
  errors: state.errors
}
);

export default connect(mapStateToProps, { getCurrentTiposql ,deleteCurrentTiposql,updateCurrentTiposql })(
  ViewTip
);


