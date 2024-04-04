import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Navbar(props) {

  return (
    <div className={`navcont ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TextUtils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form" >Form</Link>
              </li>
            </ul>
            <div className={`dark-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleMode} id="dark2" onChange={()=>toast.success("Color theme updated sucessfully!", {
                id:'tot'
              })}>
                {props.mode === 'dark' ? 'Light' : 'Dark'}

              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleMode: PropTypes.func.isRequired,
};