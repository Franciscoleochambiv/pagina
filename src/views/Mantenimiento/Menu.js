//import React from "react";
// react plugin for creating charts
import React, { useState } from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";


import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";






//import Categoriafile from "../Categorias/Categoriafile";
import Catego from "../../components/categoria";
import Shoping from "../../components/Shoping";




const useStyles = makeStyles(styles);



export default function Menu() {
  const classes = useStyles();
  const [Opcion, setOpcion] = useState(0)
  let dashboardContent;





  if (Opcion === 1) {
    dashboardContent = (
      <GridContainer>
        <Catego />
      </GridContainer>
    );


  }
  else if (Opcion === 2) {
    dashboardContent = (
      <GridContainer>
        <Shoping />
      </GridContainer>
    );

  }

  else {

    dashboardContent = (
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="primary">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Mantenimineto</p>

              <h3 className={classes.cardTitle}>

                <Button color="primary" onClick={() => setOpcion(1)} >Categoria</Button>
              </h3>


            </CardHeader>
            <CardFooter stats>

              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>

                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Mantenimiento</p>
              <h3 className={classes.cardTitle}>
                <Button color="success" onClick={() => setOpcion(2)} >Publicaciones</Button>

              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>



      </GridContainer>
    );




  }



  return (
    <div>
      <Button color="primary" onClick={() => setOpcion(0)} >Regresar al Menu Mantenimiento</Button>
      {dashboardContent}


    </div>
  );
}
