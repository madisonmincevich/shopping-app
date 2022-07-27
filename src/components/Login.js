import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../style/Login.css";

export default function Login() {
  return (
    <div className="login">
      <div
        className="modal fade"
        id="exampleModalToggle4"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalToggleLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 fs-5 mt-4 mb-4">
              <p className="text-start">
                Please enter your username and password below:
              </p>

              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      className=""
                    />
                    <div className="col-sm-6"></div>
                    <input
                      type="password"
                      placeholder="password"
                      className=""
                      autoComplete="current-password"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggleTwo"
                data-bs-toggle="modal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggleTwo"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalToggleLabel2">
                Welcome to Your Account!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pt-5 mt-5 mb-5 pb-5 fs-4">
              You have successfully logged in to your account!
            </div>
          </div>
        </div>
      </div>
      <a
        className="loginbtn btn"
        data-bs-toggle="modal"
        href="#exampleModalToggle4"
        role="button"
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
}
