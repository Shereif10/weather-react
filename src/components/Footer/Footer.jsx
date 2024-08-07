import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container ">
          <div className="row my-4 g-3 d-flex align-items-center justify-content-center">
            <div className="col-md-9 ">
              <div className="form position-relative">
                <input
                  className="form-control rounded-pill py-3"
                  placeholder="Find Your Email To Subscribe..."
                  type="text"
                  id="email"
                />
                <input
                  type="button"
                  value="Subscribe"
                  id="Subscribe"
                  className=" btn btn-info text-white rounded-5 px-4 py-2"
                />
              </div>
            </div>

            <div className="col-md-3">
              <ul className="footer-list d-flex align-items-center justify-content-center gap-1 my-0 py-0">
                <li>
                  <a
                    href="https://web.facebook.com/shereif.ahmed.56863/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shereif-elswaf-27531b27b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpbYf1J3wTP2FMGSNX8wHvA%3D%3D"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/201008851954" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:shereifelswaf7@gmail.com" target="_blank">
                    <i className="fa-brands fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Shereif10" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Copyright 2014 Company name. Designed by Shereif. All rights
            reserved <i className="fa-regular fa-copyright"></i>
          </p>
        </div>
      </footer>
    </>
  );
}
