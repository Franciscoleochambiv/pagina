import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import ProfileHeader from './ProfileHeader';
//import ProfileAbout from './ProfileAbout';
//import ProfileCreds from './ProfileCreds';
//import ProfileGithub from './ProfileGithub';
import Spinner from '../../common/Spinner';
import { getShopingByHandle } from '../../../actions/shopingActions';
import ReactHtmlParser from "react-html-parser";
import p4 from '../8.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




//import FB from 'fb';
//import { FacebookProvider, Like } from 'react-facebook';







class DetBlog extends Component {
  componentDidMount() {
   // window.location.reload();
    
    if (this.props.match.params.handle) {
      this.props.getShopingByHandle(this.props.match.params.handle);
    }
  }
 
   
  actualiza(){                                                                                                                                                                                                                                           
    window.location.reload()
  }
 


  
  componentWillReceiveProps(nextProps) {
    if (nextProps.shopingfile.shopingfile === null && this.props.shopingfile.loading) {
      this.props.history.push('/not-found');
    }                           
  }

  render() {

         // window.location.reload(); 

   
    const { shopingfile, loading } = this.props.shopingfile;
    let shofileContent;


   // let texto = JSON.stringify(shopingfile.description);
 //   console.log(texto.length)
//

//    let  texto2 = (          
 //     currentTodos.map(l1 => (
  //      console.log(texto)
   //   ))
    //)

    
    


    if (shopingfile === null || loading) {
      shofileContent = <Spinner />;
       //window.location.reload();

    } else {
      //let con= JSON.parse(JSON.stringify(shopingfile));
      //console.log(con.description)
      

     
     
     shofileContent = (
         


        <div>


       <Grid item xs={12} sm={3}>
              <Link to="/blog" className="btn btn-info  light-blue darken-2">                        
                Ir a Publicaciones 
              </Link>
          

        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation= {0} >
          <section className="view intro-video">   
            
          
            




            
                        
                                  
            <div className="hm-gradient">
            <div className="full-bg-img">
                <div className="container flex-center">
                <div className="row pt-5 mt-3">
                    

                    <div className="col-lg-12 wow fadeIn">
                   
                    <h3 className="align center">
                       <b>
                         {shopingfile.name}
                       </b> 
                      </h3>

                    {shopingfile.popular &&

                    <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                        
                      <iframe class="embed-responsive-item" src={shopingfile.imageUrls}
                        allowfullscreen></iframe>    
                    </div>

                    ||

                    <img className="img-fluid" src={shopingfile.imageUrls}/>  

                    }

                    </div>
                    <div className="col-lg-12 wow fadeIn mb-5 text-center text-lg-left">
                    <div className="black-text">

                        <br>
                        </br>

                        

                        

                        <p>{ReactHtmlParser(shopingfile.description)}</p>
                        


                        
                        
                    
                                                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            
          </section>
         
          

          </Paper>
        </Grid>

          <div >
          

            </div>
        </div>
      )
    }

    return (
      <div >
        <div >
          <div className="col-mb-8">          
            {shofileContent}
            
          </div>
          <div className="col-mb-8">
          <div className="container flex-center">
         
            <button class="btn btn-info btn-block mt-4 01579b light-blue darken-2" onClick={this.actualiza} >Comentar en Facebook</button>
                 <div className="row pt-5 mt-3">
                 <div className="fb-comments" 
                   data-href="https://sfsystemfactura.000webhostapp.com" 
                   data-numposts="5" 
                   data-width="100%" 
                   data-order-by="reverse-time" 
                   ></div>
                 </div>
                 </div>
          </div>

          
                        
        </div>
      </div>
    );
  }
}

DetBlog.propTypes = {
  getShopingByHandle: PropTypes.func.isRequired,
  shopingfile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  shopingfile: state.shopingfile
});

export default connect(mapStateToProps, { getShopingByHandle })(DetBlog);