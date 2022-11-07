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
                <a href="">
                  <img className="modal-img" src={spotify_small} alt="" />
                </a>
              </div>
              <div className="col-sm-6 ">
                <a href="">
                  <img className="modal-img" src={apple} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a href="">
                  <img className="modal-img" src={google} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a href="">
                  <img className="modal-img" src={pod} alt="" />
                </a>
              </div>
              <div className=" col-sm-6 ">
                <a href="">
                  <img className="modal-img" src={amazon} alt="" />
                </a>
              </div>
              <div className="col-sm-6 ">
                <a href="">
                  <img
                    style={{ width: "100%" }}
                    className=""
                    src={youtube}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
