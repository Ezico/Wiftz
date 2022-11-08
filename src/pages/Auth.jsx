import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const initaialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [state, setState, useEffect] = useState(initaialState);
  const [signUp, setSignUp] = useState(false);
  const { email, password, firstName, lastName, confirmPassword } = state;
  const navigate = useNavigate();
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    // console.log(password, confirmPassword);
  };
  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        return toast.error("Please Confirm Login Details");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("password don not match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/");
  };
  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <br />
        <br />
        <br />
        <div className="col-12 text-center">
          <div className="text-center heading py-2">
            {!signUp ? "Sign In" : "Sign Up"}
          </div>
          <div className="row h-100 justify-content-center align-item-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row" onSubmit={handleAuth}>
                {signUp && (
                  <>
                    <div className="col-6 py-3">
                      <input
                        name="firstName"
                        onChange={handleChange}
                        value={firstName}
                        type="text"
                        className="form-control input-text-box"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 py-3">
                      <input
                        name="lastName"
                        onChange={handleChange}
                        value={lastName}
                        type="text"
                        className="form-control input-text-box"
                        placeholder="Last Name"
                      />
                    </div>
                  </>
                )}
                <div className="col-12 py-3">
                  <input
                    name="email"
                    onChange={handleChange}
                    value={email}
                    type="email"
                    className="form-control input-text-box"
                    placeholder="email"
                  />
                </div>
                <div className="col-12 py-3">
                  <input
                    name="password"
                    onChange={handleChange}
                    value={password}
                    type="password"
                    className="form-control input-text-box"
                    placeholder="password"
                  />
                </div>
                {signUp && (
                  <div className="col- py-3">
                    <input
                      name="confirmPassword"
                      onChange={handleChange}
                      value={confirmPassword}
                      type="password"
                      className="form-control input-text-box"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}
                <div className="col-12 py-3 text-center">
                  <button
                    type="submit"
                    className={`btn ${
                      !signUp ? "btn-sign-in" : "btn-sign-up"
                    } `}
                  >
                    {!signUp ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>
              <div className="">
                {!signUp ? (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Dont have an account?&nbsp;
                        <span
                          className="link-danger"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={() => setSignUp(true)}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account?&nbsp;
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#298af2",
                          }}
                          onClick={() => setSignUp(false)}
                        >
                          Sign In
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
