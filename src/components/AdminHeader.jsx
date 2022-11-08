import { React, useState } from "react";
import { Link } from "react-router-dom";

const AdminHeader = ({ handleLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div className="container">
        <div className="navigation-menu">
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/create-podcast?podcast-new">
                CREATE PODCAST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/podcasts">
                ALL PODCASTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/create-blog?blog-new">
                CREATE POST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/blogs">
                ALL POSTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/homepage/editor">
                HOMEPAGE EDITOR
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/podcasts/editor">
                PODCAST PAGE EDITOR
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/about/editor">
                ABOUT PAGE EDITOR
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/legal/editor">
                LEGAL PAGE EDITOR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <>
      <div id="kt_header" class="header align-items-stretch">
        <div class="header-brand">
          <a href="/admin">
            <span>DASHBOARD</span>
          </a>

          <div
            class="d-flex align-items-center d-lg-none ms-n3 me-1"
            title="Show aside menu"
          >
            <div
              class="btn btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_aside_mobile_toggle"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span class="svg-icon svg-icon-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        {menu}
        <div className="signout">
          <span
            style={{ textAlign: "right", zIndex: "1", color: "white" }}
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
