//import React, { useState} from 'react';

import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
//simport {Button} from 'primereact/button';

import { getCurrentShoping, addShoping } from "../actions/shopingActions";

import Spinner from "./common/Spinner.js";

import {
  getCurrentCategoria
} from "../actions/categoriaActions";





//import { useDispatch } from "react-redux";



import { useDispatch, useSelector } from 'react-redux'

//import { Button } from 'react-materialize';


import ViewShoping from "./extra/ViewShoping";

import { Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';




import GridItem from "../components/Grid/GridItem.js";


import GridContainer from "../components/Grid/GridContainer.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


import axios from "axios";

import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';



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




const Shoping = () => {



  const ruta = "https://adryan3.sytes.net/upload/";
  let unidad = "https://adryan2.sytes.net:7001";
  let unidad2 = "https://adryan3.sytes.net:7008";

  const { register, errors, handleSubmit } = useForm();
  const [Entradas, setEntradas] = useState([]);


  const [file, setFile] = useState("");
  const [pathImage, setPathImage] = useState(ruta + "upload.png");
  const [nimagen, setNimagen] = useState(ruta + "upload.png");

  const [cate, setCate] = useState({
    codigo: 1,
    descripcion: "Categoria"
  });


  const [loading, setLoading] = useState(false);


  let dashbo = "";


  if (loading) {

    dashbo = (
      <Spinner />
    )
  }






  const categoria = useSelector(store => store.categoriafile.categoriafiles)
  const nshoping = useSelector(store => store.shopingfile.shopingfiles)

  const classes = useStyles();



  const dispatch = useDispatch();


  // const cate = useSelector (store => store.shopingfile.shopingfiles);    
  const nlen = nshoping.length;


  useEffect(() => {
    // setCount(ndata)
    dispatch(getCurrentCategoria())
  }, [dispatch])






  let ndata = 0;
  if (nlen > 0) {
    // alert(JSON.stringify(cate[0].codigo))
    ndata = parseInt(nshoping[0].id) + 1
  }


  console.log("esta es la longitud de los archvios");
  console.log(ndata);




  const sendImage = (e) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData()
    try {

      form.append('file', file, 'form-data')
      console.log(form)
      axios
        .post(unidad2 + "/api/upload/", form)
        .then(function (response) {
          setNimagen(ruta + response.data)
          setLoading(false)

        })
        .catch(function (error) {
          console.log(error);
        })


      setFile("")
      setPathImage("https://adryan3.sytes.net/upload.png")

    }
    catch {

      alert("No se ha seleccionado ningun Archivo ")
    }






  }


  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.type.includes("image")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function load() {
          setPathImage(reader.result)

        }
        setFile(file)

      }
      else {
        console.log("ha ocurrido un error")

      }

    }

  }




  const onFileChange1 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.type.includes("video/mp4")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function load() {
          setPathImage(reader.result)

        }
        setFile(file)

      }
      else {
        console.log("ha ocurrido un error")

      }

    }
  }



  const onFileChange2 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.type.includes("pdf")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function load() {
          setPathImage(reader.result)

        }
        setFile(file)

      }
      else {
        console.log("ha ocurrido un error")

      }

    }
  }


  const onSubmit = (data, e) => {
    console.log(data)
    setEntradas([
      ...Entradas,
      data
    ])

    console.log(data)
    dispatch(addShoping(data))


    e.target.reset();
  }



  const datavisible = () => {
    let data2 = dispatch(getCurrentShoping())



  }


  const [datos, setDatos] = useState({
    codigo: ndata,
    descripcion: '',
    contenido: '',
    precio: 0,
    imagen: '',
    popular: false,
    detalle: '',
    tipo: 0
  })



  const tiposc = [
    {
      value: 0,
      label: 'Imagen',
    },
    {
      value: 1,
      label: 'Video',
    },

    {
      value: 2,
      label: 'Archivo',
    },

  ]






  const enviarDatos = (event) => {
    event.preventDefault();
    let incodigo = ndata;
    //incodigo=incodigo.trim();  
    let solucion = nshoping.filter(task => (task.codigo) === incodigo);
    let flag = false;

    if (solucion.length > 0) {
      alert("El codigo Ya existe ")
      return

    }
    else {
      if (tiposc === 0) {
        flag = false;
      }
      else if (tiposc === 1) {
        flag = true;
      }
      else {
        flag = false;
      }
      console.log(datos)
      console.log("Estes es el conteido de ndata")
      console.log(ndata)
      console.log(cate)
      //console.log()
      dispatch(addShoping(datos, cate, nimagen, ndata, flag))


      setCate({
        codigo: 1,
        descripcion: "Categoria"
      });
      setNimagen(ruta + "upload.png")

      setDatos({
        precio: 0,
        tipo: 0,
        popular: false,

      })

      event.target.reset();

    }
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
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Categorias</h4>
              <p className={classes.cardCategoryWhite}>Complete la Información</p>
            </CardHeader>

            <form onSubmit={enviarDatos}>

              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>



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



                    <TextareaAutosize
                      rowsMin={10}
                      type="text"
                      id="contenido"
                      label="Contenido de la Publicacion"
                      required
                      name="contenido"
                      onChange={handleInputChange}
                      style={{ margin: 8, width: "95%" }}
                      placeholder="Contenido de la Publicacion"

                      margin="dense"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />




                    <TextField
                      type="text"
                      id="imagen"
                      label="Imagen"
                      name="imagen"
                      value={nimagen}
                      //value={file.name}
                      required
                      onChange={handleInputChange}
                      style={{ margin: 8, width: "95%" }}
                      placeholder="Imagen"
                      helperText="Imagen"
                      fullWidth
                      margin="dense"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />


                    <TextField
                      type="file"
                      id="imagen"
                      className={classes.textField}
                      margin="dense"
                      variant="outlined"
                      name="imagen"
                      onChange={onFileChange}
                    />
                    <Card>
                      <CardMedia
                        className={classes.media}
                        image={pathImage}
                        title="Contemplative Reptile"
                      />
                      <Button
                        size="sm"
                        color="info"
                        onClick={sendImage}

                      >
                        Subir Imagen
                      </Button>

                    </Card>

                    {dashbo}



                    <TextField
                      type="file"
                      id="imagen"
                      className={classes.textField}
                      margin="dense"
                      variant="outlined"
                      name="imagen"
                      onChange={onFileChange1}
                    />
                    <Card>
                      <CardMedia
                        className={classes.media}
                        image={pathImage}
                        title="Contemplative Reptile"
                      />
                      <Button
                        size="sm"
                        color="primary"
                        onClick={sendImage}

                      >
                        Subir Video
                      </Button>

                    </Card>




                    <TextField
                      type="file"
                      id="imagen"
                      className={classes.textField}
                      margin="dense"
                      variant="outlined"
                      name="imagen"
                      onChange={onFileChange2}
                    />
                    <Card>
                      <CardMedia
                        className={classes.media}
                        image={pathImage}
                        title="Contemplative Reptile"
                      />
                      <Button
                        size="sm"
                        color="warning"
                        onClick={sendImage}

                      >
                        Subir Archivo PDF
                      </Button>

                    </Card>






                    <Autocomplete
                      id="cate"
                      options={categoria}
                      name="cate"
                      freeSolo
                      value={cate}
                      onChange={(event, newValue) => {
                        setCate(newValue);
                      }}
                      // getOptionSelected={(option, value) => option.descripcion === value.descripcion}      
                      getOptionLabel={(option) => option.descripcion}
                      style={{ width: "96%" }}
                      renderInput={(params) => <TextField {...params} className={classes.textField} margin="dense" label="Categorias" variant="outlined" />}
                    />





                    <TextField
                      id="precio"
                      select
                      label="Select"
                      value={datos.tipo}
                      name="precio"
                      onChange={handleInputChange}
                      helperText="Seleccione Imagen / Video / Archivo"
                      variant="outlined"
                      margin="dense"
                    >
                      {tiposc.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}

                    </TextField>

                  </GridItem>


                </GridContainer>



              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit" >Grabar</Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>

            <CardBody profile>

              <ViewShoping />


            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>




















    </div>
  );
};

export default Shoping;



// <Link to="/blog" className="btn btn-info btn-light mb-3 float-left light-blue darken-2">                
//Ir a Blog
//</Link>
