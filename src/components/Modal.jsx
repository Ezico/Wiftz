import apple from "../assets/images/apple_small.png";
import google from "../assets/images/google_small.png";
import pod from "../assets/images/podbean_small.png";
import spotify_small from "../assets/images/sportify_small.png";
import amazon from "../assets/images/amazon_small.png";
import youtube from "../assets/images/youtube_small.png";
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button onClick={onClose} className="close-modal">
              X
            </button>
            <h2 className="text-light">Listen to our podcasts</h2>
            <p className="text-light">
              Watch or listen to us on the following platform.
            </p>
            <div className="row pop">
              <div className="col-sm-6 ">
                <a
                  href="https://open.spotify.com/show/4PHMvcu3aqIEEa4NX89TFl?si=492d2aa13a0e4846"
                  target="_blank"
                >
                  <img className="modal-img" src={spotify_small} alt="" />
                </a>
              </div>
              <div className="col-sm-6 ">
                <a
                  href="https://podcasts.apple.com/gb/podcast/wiftz-podcast/id1644619451"
                  target="_blank"
                >
                  <img className="modal-img" src={apple} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3dpZnR6L2ZlZWQueG1s?sa=X&ved=0CAMQ9sEGahcKEwjw78fN8bP7AhUAAAAAHQAAAAAQWg"
                  target="_blank"
                >
                  <img className="modal-img" src={google} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a href="https://wiftz.podbean.com/" target="_blank">
                  <img className="modal-img" src={pod} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a href="https://amzn.eu/d/7ipmppy" target="_blank">
                  <img className="modal-img" src={amazon} alt="" />
                </a>
              </div>
              <div className="col-sm-6 ">
                <a href="https://youtube.com/@thewiftz" target="_blank">
                  <img
                    style={{ width: "100%" }}
                    className=""
                    src={youtube}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
