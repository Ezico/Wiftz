import React from "react";
import apple from "../assets/images/apple1.png";
import google from "../assets/images/google1.png";
import pod from "../assets/images/podbean1.png";
import spotify from "../assets/images/spotify1.png";
import amazon from "../assets/images/amazon1.png";
import youtube from "../assets/images/youtube1.png";
import Listen from "../assets/images/listen.png";
import ListenM from "../assets/images/listenM.png";
import apple2 from "../assets/images/apple.png";
import google2 from "../assets/images/google.png";
import pod2 from "../assets/images/pod.png";
import spotify2 from "../assets/images/spotify.png";
import amazon2 from "../assets/images/amazon.png";
import youtube2 from "../assets/images/youtube.png";

const ListenOn = () => {
  return (
    <section className="mt-107">
      <div className="lt hide-small">
        <div className="wrapper">
          <div className="row">
            <div className="col-2">
              <div className="lwo">Listen or Watch on</div>
            </div>
            <div className="dl col-10">
              <a href="https://open.spotify.com/show/4PHMvcu3aqIEEa4NX89TFl?si=492d2aa13a0e4846">
                <img className="spotify" src={spotify} alt="spotify" />
              </a>
              <a href="https://podcasts.apple.com/gb/podcast/wiftz-podcast/id1644619451">
                <img className="apple" src={apple} alt="apple" />
              </a>
              <a href="https://amzn.eu/d/7ipmppy">
                <img className="amazon" src={amazon} alt="amazon" />
              </a>
              <a href="https://wiftz.podbean.com/">
                <img className="pod" src={pod} alt="pod" />
              </a>
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3dpZnR6L2ZlZWQueG1s?sa=X&amp;ved=0CAMQ9sEGahcKEwjw78fN8bP7AhUAAAAAHQAAAAAQWg">
                <img className="google" src={google} alt="google" />
              </a>
              <a href="https://youtube.com/@thewiftz">
                <img className="youtube" src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="lt hide-large">
        <div className="m-l">
          <div className="col">
            <div className="lwo">Listen or Watch on</div>
          </div>
          <div className="col">
            <a href="https://open.spotify.com/show/4PHMvcu3aqIEEa4NX89TFl?si=492d2aa13a0e4846">
              <img className="spotifym" src={spotify2} alt="spotify" />
            </a>
          </div>
          <div className="col">
            <a href="https://podcasts.apple.com/gb/podcast/wiftz-podcast/id1644619451">
              <img className="applem" src={apple2} alt="apple" />
            </a>
          </div>
          <div className="col">
            {" "}
            <a href="https://amzn.eu/d/7ipmppy">
              <img className="amazonm" src={amazon2} alt="amazon" />
            </a>
          </div>
          <div className="col">
            <a href="https://wiftz.podbean.com/">
              <img className="podm" src={pod2} alt="pod" />
            </a>
          </div>
          <div className="col">
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3dpZnR6L2ZlZWQueG1s?sa=X&amp;ved=0CAMQ9sEGahcKEwjw78fN8bP7AhUAAAAAHQAAAAAQWg">
              <img className="googlem" src={google2} alt="google" />
            </a>
          </div>
          <div className="col">
            <a href="https://youtube.com/@thewiftz">
              <img className="youtubem" src={youtube2} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenOn;
