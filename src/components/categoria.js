import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
//simport {Button} from 'primereact/button';

import { getCurrentCategoria, addCategoria } from "../actions/categoriaActions";
//import { useDispatch } from "react-redux";

import { useDispatch, useSelector } from 'react-redux'

//import { Button } from 'react-materialize';


import ViewCateHooks from "./extra/ViewCateHooks";

import { Link } from 'react-router-dom';
//import GridItem from "../:"


import GridItem from "../components/Grid/GridItem";

import GridContainer from "../components/Grid/GridContainer.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';

import { makeStyles } from "@material-ui/core/styles";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


const useStyles = makeStyles(styles);

const Catego = () => {

  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  const [Entradas, setEntradas] = useState([])

  const dispatch = useDispatch();
  const cate = useSelector(store => store.categoriafile.categoriafiles);







  const nlen = cate.length;



  //    console.log(nlen);



  let ndata = 0;
  if (nlen > 0) {
    // alert(JSON.stringify(cate[0].codigo))
    ndata = parseInt(cate[0].codigo) + 1
  }


  const [datos, setDatos] = useState({
    codigo: ndata,
    descripcion: '',

  })



  const enviarDatos = (event) => {
    event.preventDefault();
    //alert("asdas")

    //console.log(datos)

    console.log(ndata)
    let obcodigo = { codigo: +ndata }
    //  setEntradas([
    //     ...Entradas,
    //    datos
    // ])

    //console.log(datos)
    // dispatch(addCategoria(datos))
    console.log(obcodigo)
    Object.assign(datos, obcodigo)
    //console.log(datos)
    dispatch(addCategoria(datos))



    event.target.reset();
  }



  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })

  }



  return (

    <div>


      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Categorias</h4>
              <p className={classes.cardCategoryWhite}>Complete la Información</p>
            </CardHeader>
            <form onSubmit={enviarDatos}>

              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>

                    <TextField
                      type="text"

                      id="codigo"
                      value={ndata}
                      className={classes.textField}
                      helperText="Id"
                      margin="dense"
                      variant="outlined"
                      name="codigo"
                      inputProps={{ autoFocus: true }}

                      onChange={handleInputChange}
                    // onFocus={() => setCount(ndata)}

                    />


                  </GridItem>


                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      type="text"
                      id="descripcion"
                      label="Descripción del Articulo"
                      required
                      name="descripcion"
                      onChange={handleInputChange}
                      style={{ margin: 8, width: "95%" }}
                      placeholder="Descripcion"
                      fullWidth
                      margin="dense"
                      InputLabelProps={{
                        shrink: true,
                      }}

                      inputProps={{ autoFocus: true }}
                      variant="outlined"
                    />




                  </GridItem>

                </GridContainer>
                <GridContainer>
                </GridContainer>

              </CardBody>
              <CardFooter>
                <Button color="info" type="submit" >Grabar</Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>

            <CardBody profile>
              <ViewCateHooks />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}





export default Catego;


// <Link to="/blog" className="btn btn-info btn-light mb-3 float-left light-blue darken-2">

//Ir a Blog
//</Link>