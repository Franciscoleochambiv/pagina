import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if(profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if(profile && Object.keys(profile).length > 0){
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Bienvenido <Link to={`/profile/${profile.handle}`}>{profile.user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience}/>
            <Education education={profile.education}/>
            <div style={{ marginBottom: '60px'}}>
              <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-mutaded">Welcome { user.name }</p>
            <p>Mantenimiento de categorias  y Publicaiones</p>
            <Link to="/categoria" className="btn btn-lg btn-info">
               Categorias
            </Link>
            <Link to="/shoping" className="btn btn-lg btn-info">
               Publicaiones
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">

          <div className="col-md-6">
              
              <Link to="/blog" className="btn btn-info btn-light mb-3 float-left light-blue darken-2">
                
                Ir a Publicaciones
              </Link>
            </div>
           
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4">Dashboard</div>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
