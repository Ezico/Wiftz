import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="d-flex flex-column flex-root">
      <div class="d-flex flex-column flex-center flex-column-fluid p-10">
        <img
          src="https://preview.keenthemes.com/metronic8/react/demo8/media/illustrations/sketchy-1/18.png"
          alt=""
          class="mw-100 mb-10 h-lg-450px"
        />
        <h1 class="fw-bold mb-10">Seems there is nothing here</h1>
        <Link class="btn btn-primary" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
