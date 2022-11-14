import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Wiftz-logo.png";
import Menu from "../assets/images/humburger.png";
import Modal from "../components/Modal";
const Header = ({ active }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [openModal, setOpenModel] = useState(false);
  let menu;

  useEffect(() => {
    var navbar = document.querySelector(".navbarx");
    window.onscroll = function () {
      addSticky();
    };
    var sticky = navbar.offsetTop;
    function addSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    console.log(navbar);
  }, []);

  if (showMenu) {
    menu = (
      <div className="container">
        <div className="navigation-menu">
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/podcasts">
                PODCAST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <>
      {menu}
      <Modal open={openModal} onClose={() => setOpenModel(false)} />
      <header className="black navbarx">
        <div className="container">
          <div className="row s-e">
            <div className=" col-6 logo">
              <Link to="/">
                <img className="logo" src={Logo} alt="" />
              </Link>
            </div>
            <div className="col-6">
              <ul className="desktop-navigation">
                <Link to="/podcasts">
                  <li
                    className={`nav-item ${
                      active === "Podcasts" ? "activenav" : ""
                    }`}
                  >
                    PODCASTS
                  </li>
                </Link>
                <Link to="/blog">
                  <li
                    className={`nav-item ${
                      active === "Blog" ? "activenav" : ""
                    }`}
                  >
                    BLOG
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className={`nav-item ${
                      active === "About" ? "activenav" : ""
                    }`}
                  >
                    ABOUT
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    className={`nav-item ${
                      active === "Contact" ? "activenav" : ""
                    }`}
                  >
                    CONTACT
                  </li>
                </Link>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  className="primary cta"
                  onClick={() => setOpenModel(!openModal)}
                >
                  Listen
                </button>
              </ul>
              <img
                className="mobile-navigation"
                src={Menu}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
