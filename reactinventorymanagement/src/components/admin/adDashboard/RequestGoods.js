import React from "react";

import { useHistory } from "react-router-dom";
import "./RequestGoodsdes.css";
export default function RequestGoods() {
  const history = useHistory();

  return (
    <div>
      <div>
        <div class="reqarea"></div>
        <nav class="reqmain-menu">
          <ul>
            <li>
              <a href="/dashboard">
                <i class="reqfa fa-home fa-2x"></i>
                <span class="reqnav-text">Dashboard</span>
              </a>
            </li>
            <li class="reqhas-subnav">
              <a href="/requestgoods">
                <i class="reqfa fa-laptop fa-2x"></i>
                <span class="reqnav-text">Order Request</span>
              </a>
            </li>
            <li class="reqhas-subnav">
              <a href="/warehouse">
                <i class="reqfa fa-list fa-2x"></i>
                <span class="reqnav-text">Warehouse</span>
              </a>
            </li>
            <li class="reqhas-subnav">
              <a href="/addcredentials">
                <i class="reqfa fa-folder-open fa-2x"></i>
                <span class="reqnav-text">Add User Credentials</span>
              </a>
            </li>
            <li>
              <a href="/adminalerts">
                <i class="reqfa fa-bar-chart-o fa-2x"></i>
                <span class="reqnav-text">Notification</span>
              </a>
            </li>
            <li>
              <a href="/orderhistory">
                <i class="reqfa fa-bar-chart-o fa-2x"></i>
                <span class="reqnav-text">Order History</span>
              </a>
            </li>
          </ul>

          <ul class="reqlogout">
            <li>
              <a href="/landingpage">
                <i class="reqfa fa-power-off fa-2x"></i>
                <span class="reqnav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* nav bar end */}

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
  );
}
