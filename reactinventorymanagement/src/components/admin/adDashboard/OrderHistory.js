import React from 'react'
import './OrderHistorydes.css';
import { useHistory } from "react-router-dom";
import './Common.css';
export default function OrderHistory() {
  const history = useHistory();
    return (
        <div>
    <div>
      <div class="oharea"></div>
      <nav class="ohmain-menu">
        <ul>
          <li>
            <a href="/dashboard">
              <i class="ohfa fa-home fa-2x"></i>
              <span class="ohnav-text">Dashboard</span>
            </a>
          </li>
          <li class="ohhas-subnav">
            <a href="/requestgoods">
              <i class="ohfa fa-laptop fa-2x"></i>
              <span class="ohnav-text">Order Request</span>
            </a>
          </li>
          <li class="ohhas-subnav">
            <a href="/warehouse">
              <i class="ohfa fa-list fa-2x"></i>
              <span class="ohnav-text">Warehouse</span>
            </a>
          </li>
          <li class="ohhas-subnav">
            <a href="/addcredentials">
              <i class="ohfa fa-folder-open fa-2x"></i>
              <span class="ohnav-text">Add User Credentials</span>
            </a>
          </li>
          <li>
            <a href="/adminalerts">
              <i class="ohfa fa-bar-chart-o fa-2x"></i>
              <span class="ohnav-text">Notification</span>
            </a>
          </li>
          <li>
            <a href="/orderhistory">
              <i class="ohfa fa-bar-chart-o fa-2x"></i>
              <span class="ohnav-text">Order History</span>
            </a>
          </li>
        </ul>

        <ul class="ohlogout">
          <li>
            <a href="/landingpage">
              <i class="ohfa fa-power-off fa-2x"></i>
              <span class="ohnav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
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
       
    )
}
