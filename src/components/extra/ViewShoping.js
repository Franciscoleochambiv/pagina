
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentShoping, deleteCurrentShoping, updateCurrentShoping

} from "../../actions/shopingActions";


import Spinner from "../common/Spinner.js";




import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal/Modal.js';


//import Modal from '@material-ui/core/Modal';
//import Example from "../components/Modal/Example.js";

import Input from "@material-ui/core/Input";
import Button from "../CustomButtons/Button.js";
import Select from "@material-ui/core/Input";
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";


import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";

import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";


import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

//import SimpleModal from "./SimpleModal"
//import Table from "@material-ui/core/Table";



//import { Button,Modal } from 'react-materialize';

//import {Dialog} from 'primereact/dialog';
import ReactPaginate from 'react-paginate';

import '../data.css';

class ViewShoping extends Component {
  constructor() {
    super();
    this.state = {
      tipoData: [],
      id: "",
      name: "",
      category: "",
      price: "",
      description: "",
      popular: "",
      imageUrls: "",
      id_: "",
      search: '',
      currentPage: 1,
      todosPerPage: 5,
      selectedPage: 1,
      isOpen: false

    };


    this.searchHandler = this.searchHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.onChange = this.onChange.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
    this.seleccion = this.seleccion.bind(this);
    this.ordenac = this.ordenac.bind(this);
  }


  toggleModal = (id, cod, des, category, price, description, popular, imageUrls) => {
    this.setState({
      isOpen: !this.state.isOpen,
      id_: id,
      id: cod,
      name: des,
      category: category,
      price: price,
      description: description,
      popular: popular,
      imageUrls: imageUrls


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
      name: this.state.name,
      id: this.state.id,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      popular: this.state.popular,
      imageUrls: this.state.imageUrls
    };
    console.log(tipoData)
    this.props.updateCurrentShoping(this.state.id_, tipoData);
    this.toggleModalfin();

  }


  onChange(e) {
    console.log(e.target.value)
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
      currentPage: Number(selected + 1)
    })
  };



  seleccion(event) {
    event.preventDefault();
    let op = event.target.value;
    this.setState({ todosPerPage: op });
  };



  ordenac(columna) {
    let oc = columna;
    alert(oc);

  };




  searchHandler(event) {
    const lolo = event.target.value.toUpperCase();
    this.setState({ search: lolo });
    this.setState({
      selectedPage: 1,
      currentPage: Number(1)
    })
  }




  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onDeleteClick(id) {
    this.props.deleteCurrentShoping(id);
  }



  componentDidMount() {
    this.props.getCurrentShoping();
  }







  render() {





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



    const useStyles = makeStyles(styles);

    const classes = useStyles;

    const dialogFooter = (
      <div>
      </div>
    );


    const { shopingfiles, loading } = this.props.shopingfile;
    const { currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(shopingfiles.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    let filteredContacts = shopingfiles.filter(
      (task) => {
        let poetName = task.name.toUpperCase() + task.description.toUpperCase();
        let separador = " ";
        let i;
        let poetName1 = this.state.search.split(separador);
        let tpalabras = poetName1.length;
        let datopa;
        if (tpalabras > 3) {
          return poetName.indexOf(this.state.search) !== -1;

        }
        else {

          for (i = 0; i < tpalabras; i++) {
            //console.log("recorriendo el aray")
            //  console.log(poetName1[i]); 
            datopa = poetName1[i];
            //datopa=datopa+" "+datopa;
            return poetName.indexOf(datopa) !== -1;
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
        containerClassName={'react-paginate ul'}
        subContainerClassName={'react-paginate li'}
        activeClassName={'active'}

      />
    )


    const currentTodos = filteredContacts.slice(indexOfFirstTodo, indexOfLastTodo);
    let dashboardContent;
    let edicion;

    if (filteredContacts === null || loading) {


      dashboardContent = (
        <TableRow >
          <TableCell >
            <Spinner />
          </TableCell>
        </TableRow >
      );






    } else {

      edicion = (<h1></h1>);

      if (this.state.isOpen) {

        edicion = (

          <div >

            <Modal isOpen={this.state.isOpen}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>

                  <Card>
                    <CardHeader color="info">

                      <h4 className={classes.cardTitleWhite}>Edicion  de Publicaciones</h4>





                      <form onSubmit={this.onSubmit}  >

                        <CardBody>
                          <div className="p-col-12 p-lg-12">
                            <div className="card card-w-title  p-col-12 p-lg-12" >

                              <div className="p-grid">
                                <div className="p-col-12 p-md-6">
                                  <input className="p-inputtext p-component"
                                    placeholder="id "
                                    value={this.state.id}
                                    name="id"
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-6">
                                  <input className="p-inputtext p-component"
                                    name="name"
                                    placeholder="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-6">
                                  <input className="p-inputtext p-component"
                                    name="category"
                                    placeholder="Categoria"
                                    value={this.state.category}
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-6">
                                  <input className="p-inputtext p-component"
                                    name="price"
                                    placeholder="Precio"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-12">
                                  <textarea class="md-textarea form-control" rows="10"
                                    name="description"
                                    placeholder="Descripcion del Producto"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-6">
                                  <input className="p-inputtext p-component"
                                    name="popular"
                                    placeholder="Verdarero o Falso"
                                    value={this.state.popular}
                                    onChange={this.onChange}
                                  />
                                </div>

                                <div className="p-col-12 p-md-12">
                                  <textarea class="md-textarea form-control" rows="1"
                                    name="imageUrls"
                                    placeholder="Imagen asociada a el producto "
                                    value={this.state.imageUrls}
                                    onChange={this.onChange}
                                  />
                                </div>








                              </div>
                            </div>
                          </div>
                          <div className="p-col-12 p-nogutter">
                            <div className="p-grid">
                              <div className="p-col-12 p-lg-12">
                                <div className="card card-w-title">
                                  <div className="p-grid">
                                    <div className="p-col-12 p-md-6" style={{ textAlign: 'center' }}>
                                      <button type="submit" label="Grabar  " style={{ marginBottom: '10px' }} className="btn btn-info  mt-4 01579b light-blue darken-2">Editar</button>
                                      <button type="button" label="Cancelar" style={{ marginBottom: '10px' }} className="btn btn-danger  mt-4 01579b red darken-2" onClick={() => this.setState({ isOpen: false })}>Cancel</button>

                                    </div>


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </CardBody>
                      </form>

                    </CardHeader>
                  </Card>


                </GridItem>

              </GridContainer>




            </Modal>


          </div>
        );
      }


      if (Object.keys(this.props.shopingfile).length > 0) {
        dashboardContent = (
          currentTodos.map(l1 => (

            <TableRow key={l1._id} className={classes.tableBodyRow}>



              <TableCell className={classes.tableCell}>
                <button type="button" onClick={this.toggleModal.bind(this, l1._id, l1.id, l1.name, l1.category, l1.price, l1.description, l1.popular, l1.imageUrls)} className="btn btn-primary  mt-4 01579b light-blue darken-2"  >Editar</button>

              </TableCell>

              <TableCell className={classes.tableCell}>
                <button type="button" className="btn btn-danger  mt-4 01579b red darken-2" onClick={this.onDeleteClick.bind(this, l1._id)} >Borrar</button>

              </TableCell>
              <TableCell className={classes.tableCell}>{l1.id}</TableCell>
              <TableCell className={classes.tableCell}>{l1.name}</TableCell>
              <TableCell className={classes.tableCell}>{l1.category}</TableCell>
              <TableCell className={classes.tableCell}>{l1.price}</TableCell>
              <TableCell className={classes.tableCell}>{l1.description.substr(0, 40)}</TableCell>
              <TableCell className={classes.tableCell}>{l1.imageUrls[0].substr(0, 30)}</TableCell>






            </TableRow>

          ))
        );
      }
      else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Bienvenido </p>
            <p>Aún no ha configurado un perfil, por favor agregue alguna información.</p>
          </div>
        );
      }
    } //FIN DEL RENDER

    return (

      <GridItem xs={12} sm={12} md={12}>
        {edicion}

        <select className="form-control" style={{ "colo": "red" }} value={this.todosPerPage} onChange={this.seleccion}>
          <option style={{ "colo": "red" }} value="5">
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
          <option value={filteredContacts.length}>
            Todos
          </option>
        </select>

        <input type="text" name="buscar" className="form-control" placeholder="Ingrese cadena A Buscar" onChange={this.searchHandler} value={this.state.search} />






        <Card style={{ overflow: "scroll", overflow: "auto" }}>

          <CardBody>
            <GridContainer>


              <CardBody>
                <GridContainer>

                  <GridItem xs={12} sm={12} md={5}>
                    <TableHead color="primary" >
                      <TableRow className={classes.tableHeadRow}>

                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Modificaiones</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Eliminaciones</TableCell>

                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Id</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Descripcion</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Categoria</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Tipo</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Contenido</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Url</TableCell>


                      </TableRow>

                    </TableHead>

                    <TableBody>
                      {dashboardContent}
                    </TableBody>

                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    {Pagination}
                  </GridItem>

                </GridContainer>
              </CardBody>

            </GridContainer>
          </CardBody>

        </Card>


        <CardHeader color="primary">
          <p className={classes.cardCategoryWhite}>
            Numero de Coincidencias encontradas {filteredContacts.length}
          </p>
        </CardHeader>






      </GridItem>
    );
  }
}


ViewShoping.propTypes = {
  getCurrentShoping: PropTypes.func.isRequired,
  deleteCurrentShoping: PropTypes.func.isRequired,
  updateCurrentShoping: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  shopingfile: state.shopingfile,
  errors: state.errors
}
);

export default connect(mapStateToProps, { getCurrentShoping, deleteCurrentShoping, updateCurrentShoping })(
  ViewShoping
);

