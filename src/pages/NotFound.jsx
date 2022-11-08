import { React, useEffect } from "react";

const NotFound = () => {
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;
