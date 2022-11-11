import React from "react";
// import apple from "../assets/images/apple.png";
// import google from "../assets/images/google.png";
// import pod from "../assets/images/pod.png";
// import spotify from "../assets/images/spotify.png";
// import amazon from "../assets/images/amazon.png";
// import youtube from "../assets/images/youtube.png";
import Listen from "../assets/images/listen.png";
import ListenM from "../assets/images/listenM.png";

const ListenOn = () => {
  return (
    <section className="mt-107">
      {/* <div className="listen-on">
        <div className="container">
          <div className="row df">
            <div className="col-md-4 col-sm-12  tac">
              <p className="lwo">Listen or Watch on</p>
            </div>
            <div className="col-md-8 col-sm-12  df">
              <img className="spotify" src={spotify} alt="spotify" />
              <img className="apple" src={apple} alt="apple" />
              <img className="pod" src={pod} alt="pod" />
              <img className="amazon" src={amazon} alt="amazon" />
              <img className="google" src={google} alt="google" />
              <img className="youtube" src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </div> */}
      <img src={Listen} className="hide-small w-100" />
      <img src={ListenM} className="hide-large w-100" />
    </section>
  );
};

export default ListenOn;
