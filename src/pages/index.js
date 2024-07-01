import React, { useEffect } from "react";
import Link from "next/link";
import "../app/index.css";
import { dashboard } from "./dashboard.js";
import { signup } from "./login.js";

const HomePage = () => {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar when the page is loaded
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener("scroll", navbarShrink);
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.removeEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
    };
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#">
            GovTech Connect
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dashboard">
                  Signup / Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">GovTech</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Bridging the gap between government projects and emerging tech
                talent.
              </h2>
              <a className="btn btn-primary" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Turning theory into practical</h2>
              <p className="text-white-50">
                GovTech was inspired by the desire to provide newbie tech
                professionals with real-world experience while assisting
                government agencies with their tech needs.
              </p>
            </div>
          </div>
          <img className="img-fluid" src="/img/ipad.png" alt="..." />
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/img/bg-masthead.jpg"
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Streamlined</h4>
                <p className="text-black-50 mb-0">
                  Get matched with suitable projects based on skills,
                  experience, and availability. Streamline the process of
                  finding the right people for specific projects.
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="/img/demo-image-01.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Collaborate</h4>
                    <p className="mb-0 text-white-50">
                      collaborate on projects directly both as tech
                      professionals and government agencies making use of tools
                      for for project management, communication, and document
                      sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="/img/demo-image-02.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Learn and Grow</h4>
                    <p className="mb-0 text-white-50">
                      All learning materials, training programs, and resources
                      for tech professionals to improve their skills thereby
                      making them more valuable to government projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">To get started on your journey</h2>

              <form
                className="form-signup"
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
              >
                <div className="row input-group-newsletter">
                  <div className="col">
                    <input
                      className="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Enter email address..."
                      aria-label="Enter email address..."
                      data-sb-validations="required,email"
                    />
                  </div>
                  <div className="col-auto">
                 
                    <button
                      className="btn btn-primary disabled"
                      id="submitButton"
                      type="submit"
                    >
                    <a href="signup">
                      Sign up here
                      </a>
                    </button>
                   
                  </div>
                </div>
                <div
                  className="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback mt-2"
                  data-sb-feedback="emailAddress:email"
                >
                  Email is not valid.
                </div>

                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3 mt-2">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Founder's Names</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    Samuel Sylvester <br></br> Arthur Tchaye
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Founder's Emails</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">samsylvester09@gmail.com</a><br></br><a href="#!">samsylvester09@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Github Links</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                  <a href="#!">Sylvester009</a><br></br><a href="#!">Fchaye</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright &copy; GovTech 2024
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
