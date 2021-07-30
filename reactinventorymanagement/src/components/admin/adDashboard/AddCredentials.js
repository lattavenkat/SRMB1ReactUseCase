import React from "react";
import "./AddCredentialsdes.css";

export default function AddCredentials() {
  return (
    <div className="addcredbody">
      {/* Tabs  */}

      <div className="tabs">
        <div id="tab-3">
          <div className="mahi_holder">
            <div className="container">
              <br />
              <div className="row bg_3">
                <h2>
                  <i>Manager Personal Info</i>
                </h2>
                <br />
                <br />

                <div className="wrap">
                  <button className="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card1 end */}

      {/* tab1  */}
      <div id="tab-1">
        <div className="mahi_holder">
          <div className="container">
            <br />
            <div className="row bg_3">
              <div className="tab1heading">
                <h2>
                  <i>Checker Personal Info</i>
                </h2>
              </div>
              <br />
              <br />

              <div className="wrap">
                <button className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tab1 end
      <div id="tab-2">
        <div className="mahi_holder">
          <div className="container">
            <br />
            <div className="row bg_2">
              <div className="tab1heading">
                <h2>
                  <i>Checker Personal Info</i>
                </h2>
              </div>
              <br />
              <br />

              <div className="wrap">
                <button className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
