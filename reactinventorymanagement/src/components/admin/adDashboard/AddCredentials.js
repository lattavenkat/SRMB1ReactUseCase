import React from "react";
import AddCheckerInfo from "./AddCheckerInfo";
import AddManagerInfo from "./AddManagerInfo";
import "./AddCredentialsdes.css";
import './Common.css';
import { useHistory } from "react-router-dom";

export default function AddCredentials() {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="addcredbody">
          {/* -------------------------------------------------------------------------------manager---------------------------------------------------------------------------------------------- */}
          {/* Tabs */}
          <div className="tabs">
            <div id="tab-3">
              <div className="mahi_holder">
                <div className="container">
                  <br />
                  <div className="row bg_3">
                    <h2 className="credh2">
                      <i>Manager Information</i>
                    </h2>
                  </div>
                  <AddManagerInfo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card1 end  */}
      </div>

      {/* -------------------------------------------------------------------------------checker---------------------------------------------------------------------------------------------- */}
      <div>
        <div className="addcredbody">
          {/* tab1  */}
          <div id="tab-1">
            <div className="mahi_holder">
              <div className="container">
                <br />
                <div className="row bg_3">
                  <div className="tab1heading">
                    <h2 className="credh2">
                      <i>Checker Information</i>
                    </h2>
                  </div>
                  <AddCheckerInfo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card2 end  */}

        <div className="btnpos">
          <div class="button-container-1">
            <span class="mas">GO BACK</span>
            <button
              id="work"
              className="bckbtn"
              name="Hover"
              onClick={() => {
                history.goBack();
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
