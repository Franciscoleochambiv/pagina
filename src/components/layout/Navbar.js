import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import { Slide, Slider, Caption, SideNav, SideNavItem, Button, Icon, Collapsible, CollapsibleItem, Dropdown, Divider } from 'react-materialize';
//import p1 from '../extra/1.jpg';

import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {



  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }




  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (

      <div className="container " >
        <ul id="nav-mobile" className="nav justify-content-end"  >

          <li className="nav-item">
            <Link to="/menu">
              Inicio
            </Link>

          </li>


          <li className="nav-item">
            <Link to="/radio">
              Chat On Line
            </Link>

          </li>

          <li className="nav-item">
            <Link to="/nosotros">
              Nosotros
            </Link>

          </li>


          <li className="nav-item">
            <Link to="/contacto">
              Contacto
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/blog">
              Blog
            </Link>
          </li>




          <li className="nav-item">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="/login"
              onClick={this.onLogoutClick.bind(this)}
              className="nav-link"
            >
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: '25px', marginRight: '5px' }}
                title="You must have a gravatar connected to your email to display an image" />
              {' '}Logout -- {user.name}

            </a>
          </li>
        </ul>
      </div>

    );

    const guestLinks = (



      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Publicaciones
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/radio">
            Chat On Line
          </Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link" to="/nosotros">
            Nosotros
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>

        <nav style={{ backgroundColor: "rgb(14, 15, 17)", paddingBottom: 5 }} >
          <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large" ><i className="material-icons">menu</i></a>


          <ul id="slide-out" className="sidenav"  >




            <SideNavItem userView
              user={{
                background: 'https://placeimg.com/640/480/tech',

                name: 'Municipalidad Distrital de Chamaca',
                email: 'munichamacamesadepartes@gmail.com'
              }} />
            <SideNavItem >
              <Link style={{ color: 'black' }} className="nav-link" to="/">
                Inicio
              </Link>
            </SideNavItem>
            <SideNavItem >
              <Link style={{ color: 'black' }} className="nav-link" to="/blog">
                Publicaciones
              </Link>
            </SideNavItem>
            <SideNavItem >
              <Link style={{ color: 'black' }} className="nav-link" to="/radio">
                Radio
              </Link>
            </SideNavItem>
            <SideNavItem >
              <Link style={{ color: 'black' }} className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </SideNavItem>
            <SideNavItem >
              <Link style={{ color: 'black' }} className="nav-link" to="/contacto">
                Contacto
              </Link>
            </SideNavItem>


            <SideNavItem divider />

            <Dropdown
              id="Dropdown_6"
              options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }}
              trigger={<a style={{ color: "black" }} href="#!">Acceso{' '}<Icon right>arrow_drop_down</Icon></a>}
            >
              <a >
                <Link style={{ color: 'black' }} className="nav-link" to="/login">
                  Login
                </Link>

              </a>
              <a href="#">
                <Link style={{ color: 'black' }} className="nav-link" to="/register">
                  Registro
                </Link>

              </a>
              <Divider />
              <a href="#">
                Otros
              </a>
            </Dropdown>








          </ul>


          {isAuthenticated ? authLinks : guestLinks}








        </nav>




      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logoutUser, clearCurrentProfile
})(Navbar);
