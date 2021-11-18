/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
//import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { Route, Switch, Redirect } from "react-router-dom";

import GridItem from "./components/Grid/GridItem.js";
import GridContainer from "./components/Grid/GridContainer.js";

import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader.js";
import CardBody from "./components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Radio from "./components/extra/Radio";



//import PrivateRoute from "./components/common/PrivateRoute.js";
//import { Provider } from 'react-redux';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { setCurrentUser, logoutUser } from './actions/authActions';

import store from './store';
import "./App.css";


// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

//import Categoriafile from "./views/Categorias/Categoriafile";
//import Tipofile from "./views/Tipos/Tipofile";
import Menu from "./views/Mantenimiento/Menu";

import Header from "./views/Header/Header"
import CartDialog from "./views/CartDialog/CartDialog"
import ProductList from "./views/ProductList/ProductList"
import Details from "./views/Details/Details";
import Order from "./views/Order/Order"





import Inicio from "./views/Inicio/Inicio"


import Blog from "./components/extra/Blog";

import Blog3 from "./components/extra/Blog3";

import BlogCat from "./components/extra/BlogCat";
import Shoping from "./components/Shoping";
import Categoria from "./components/categoria";
import DetBlog from "./components/extra/detblog/DetBlog";
import Dashboard1 from "./components/dashboard/Dashboard"
import Nosotros from "./components/extra/Nosotros";
import Contacto from "./components/extra/Contacto";
import Mision from "./components/extra/Mision";
import Historia from "./components/extra/Historia";
import Alcaldes from "./components/extra/Alcaldes";
import Simbolos from "./components/extra/Simbolos";
import Regidores from "./components/extra/Regidores";
import Alcalde from "./components/extra/Alcalde";
import Organigrama from "./components/extra/Organigrama";
import Personal from "./components/extra/Personal";
import Trabajaperu from "./components/extra/Trabajaperu";
import Seguridadciudadana from "./components/extra/Seguridadciudadana";
import Doctor from "./components/extra/Doctor";
import Construccion from "./components/extra/Contruccion"

import Privacidad from "./components/extra/Privacidad";

import Dashboard from "./views/Dashboard/Dashboard"

import Redidigir from "./Redirigir";


import Salir from "./Salir"

import PDF from "./pdf";
import Archivos from "./archivos";
import Archivos1 from "./archivos1";
import PosHooks from "./views/Pos/PosHooks";


import { useDispatch, useSelector } from 'react-redux'



if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 100;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to Login
    window.location.href = '/login';
  }
}



//const hist = createBrowserHistory();

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  root: {
    maxWidth: 445,
  },
  media: {
    height: 100,
    marginTop: "0",
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


const App = () => {
  const classes = useStyles();

  const data = useSelector(store => store.cartItem.showCartDlg)



  return (

    <div>

      <Navbar />

      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Redidigir} />

        <Route path="/rtl" component={RTL} />

        <Route exact path='/login' component={Login} />


        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog3' component={Blog3} />


        <Route exact path='/detblog/:handle' component={DetBlog} />
        <Route exact path='/detblog1/:handle' component={BlogCat} />

        <Route exact path='/categoria' component={Categoria} />
        <Route exact path='/shoping' component={Shoping} />
        <Route exact path='/lolo' component={Dashboard1} />
        <Route exact path='/radio' component={Radio} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/privacidad' component={Privacidad} />

        <Route exact path='/mision' component={Mision} />
        <Route exact path='/historia' component={Historia} />
        <Route exact path='/alcaldes' component={Alcaldes} />
        <Route exact path='/simbolos' component={Simbolos} />
        <Route exact path='/regidores' component={Regidores} />
        <Route exact path='/alcalde' component={Alcalde} />
        <Route exact path='/organigrama' component={Organigrama} />
        <Route exact path='/personal' component={Personal} />
        <Route exact path='/trabajaperu' component={Trabajaperu} />
        <Route exact path='/seguridadciudadana' component={Seguridadciudadana} />
        <Route exact path='/doctor' component={Doctor} />
        <Route exact path='/construccion' component={Construccion} />


        <Route exact path='/inicio' component={Inicio} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/menua' component={Menu} />

        <Route path="/prod" exact component={ProductList} />
        <Route path="/details/:id" component={Details} />
        <Route path="/order" component={Order} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/salir" component={Salir} />

        <Route path="/pos" component={PosHooks} />






        <Route path='/pdf/:id' component={PDF} />
        <Route path='/archivos/:id' component={Archivos} />
        <Route path='/archivos1/:id' component={Archivos1} />

        <Route
          component={() => (
            <div style={{ padding: 20 }}>Page not found</div>
          )}
        />
      </Switch>





      <Footer />






    </div>











  )
}

export default App

/*<Route path="/details/:id" component={Details} />
      <Route path="/login" component={Login} />
      <Route path="/order" component={Order} />
      <Redirect from="/" to="/admin/dashboard" />
        <GridItem xs={12} sm={12} md={6}>

               <CartDialog />  </GridItem>








                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
      */
