import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import ListSubheader from '@material-ui/core/ListSubheader';

//import Card from '@material-ui/core/Card';
///import CardHeader from '@material-ui/core/CardHeader';

import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { red } from '@material-ui/core/colors';



import p1 from './5.jpg';
import p2 from './6.jpg';
import p3 from './7.jpg';
import p4 from './8.jpg';
import p45 from './45.jpg';

import { Link } from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from "prop-types";

import { getCurrentShoping } from "../../actions/shopingActions";
import { logoutUser } from '../../actions/authActions';
import ReactPaginate from 'react-paginate';

import Cateblog from './detblog/Cateblog';
import Posts from '../post/Post';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root3: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 600,
    height: 850,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  root: {
    flexGrow: 1,
    //	maxWidth:345,
  },
  root2: {
    maxWidth: 500,

  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transfrfom: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

//const classes = useStyles();

const Blog3 = () => {

  const dispatch = useDispatch()
  const data = useSelector(store => store.shopingfile.shopingfiles)


  //    const [ isAuthenticated, user ] = store.auth;

  const [search, setsearch] = useState("")
  const [currentPage, setcurrentPage] = useState(1)
  const [todosPerPage, settodosPerPage] = useState(5)


  useEffect(() => {
    dispatch(getCurrentShoping())
  }, [dispatch])


  const searchHandler = (event) => {
    const lolo = event.target.value.toUpperCase();
    setsearch(lolo)

  }

  const handlePageClicked = data => {
    let selected = data.selected;
    //  setselectedPage(selected)
    let sumapagina = Number(selected + 1)
    setcurrentPage(sumapagina)

  };


  const seleccion = (event) => {
    event.preventDefault();
    let op = event.target.value;
    settodosPerPage(op)
  };


  const classes = useStyles();

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  let filteredContacts = data.filter(
    (task) => {
      let poetName = task.name.toUpperCase() + task.description.toUpperCase();
      let separador = " ";
      let i;
      let poetName1 = search.split(separador);
      let tpalabras = poetName1.length;
      let datopa;
      if (tpalabras > 3) {
        return poetName.indexOf(search) !== -1;

      }
      else {

        for (i = 0; i < tpalabras; i++) {
          datopa = poetName1[i];
          return poetName.indexOf(datopa) !== -1;
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
      onPageChange={handlePageClicked}
      containerClassName={'pagination pagination justify-content-center '}
      subContainerClassName={' page-item page-link badge badge-primary'}
      activeClassName={'active'}


    />
  )

  let dashboardContent, dashboardContent1;
  const currentTodos = filteredContacts.slice(indexOfFirstTodo, indexOfLastTodo);



  if (Object.keys(data).length > 0) {
    dashboardContent = (
      currentTodos.map(l1 => (
        <ImageListItem >
          <Card >
            <CardHeader >

              {l1.popular &&
                <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                  <iframe class="embed-responsive-item" src={l1.imageUrls}
                    allowfullscreen>
                  </iframe>
                </div>
                ||
                <CardMedia
                  className={classes.media}
                  image={l1.imageUrls}
                  title="imagen"
                />
              }

              <Typography variant="h6" gutterBottom aling='center'>
                {l1.name}
              </Typography>

            </CardHeader>


            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {l1.description.substring(0, 300)} . . .
              </Typography>
            </CardContent>

            <a >
              <Link to={`/detblog/${l1._id}`} className="btn btn light-blue darken-2">Leer Mas</Link>
            </a>
          </Card>

        </ImageListItem>
      ))
    )


    dashboardContent1 = (
      currentTodos.map(l1 => (
        <ul className="todo-list">
          <li>
            <div className="icon">


              <div >
                <a style={{ textAlign: "center" }}>

                  <Link to={`/detblog/${l1._id}`} >{l1.name} </Link>

                </a>

              </div>



            </div>
          </li>
        </ul>
      )
      )
    )
  }
  else {

    dashboardContent = (
      <div>
        <p className="lead text-muted">Bienvenido </p>
        <p>Aún no ha configurado un perfil, por favor agregue alguna información.</p>
      </div>
    );


  }



  return (
    <div
    >
      <input type="text" name="buscar" className="form-control" placeholder="Buscar en las Publicaciones" onChange={searchHandler} value={search} />

      <Grid item xs={12} sm={12} className={classes.root3}>


        <ImageList  >




          {dashboardContent}

        </ImageList>



      </Grid>




      <Grid item xs={12}>
        <Paper className={classes.paper}>

          <Typography variant="body2" color="textSecondary" component="p">
            Numero de Coincidencias encontradas {filteredContacts.length}
          </Typography>
          {Pagination}

          <img className="img-fluid" src={p45} />




        </Paper>
      </Grid>

    </div >

  );
}
export default Blog3;

