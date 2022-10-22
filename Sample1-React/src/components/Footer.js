import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-facebook-f"></i>
          </Link>
          <Link to="/" className="me-4 text-reset"> 
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa-solid fa-gem"></i>Sample1
              </h6>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Work</h6>
              <p>
                <Link to="/" className="text-reset">
                  Education
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Healthcare
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Social Welfare
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Nutrition
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Donation
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Initiaves
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact US</h6>
              <p>
                <i className="fa fa-home me-3"></i> NIT Surat , Surat ,
                India 136119
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                info@sample1.com
              </p>
              <p>
                <i className="fa fa-phone me-3"></i> 01744 233 229
              </p>
              <p>
                <i className="fa fa-print me-3"></i> 01744 233 229
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 own-class">
        © 2022 Copyright:
        <Link className="text-reset fw-bold" to="/">
          Sample1.org
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
 