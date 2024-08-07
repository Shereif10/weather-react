import React from 'react'
import style from './NavBar.module.css'
import logo from '../../assets/images/logo@2x.png'

export default function NavBar() {
  return (
    <>
      <nav className="navbar py-5 navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="navLogo">
            <a className="navbar-brand  d-flex justify-content-center align-items-center" href="#">
              <img className="w-25 me-2" src={logo} alt="logo" />
              <div className='ms-3'>
                <h1 className='m-0 p-0 fs-6 fw-bolder'>Weather</h1>
                <p className='m-0 p-0 fs-6 text-muted'>tagline goes here</p>
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Live Cameras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Photos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
