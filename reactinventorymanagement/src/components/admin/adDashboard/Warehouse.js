import React from "react";
import "./Warehousedes.css";
import { useHistory } from "react-router-dom";
export default function Warehouse() {
  const history = useHistory();
  return (
    <div>
      <div>
        <div class="warearea"></div>
        <nav class="waremain-menu">
          <ul>
            <li>
              <a href="/dashboard">
                <i class="warefa fa-home fa-2x"></i>
                <span class="warenav-text">Dashboard</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/requestgoods">
                <i class="warefa fa-laptop fa-2x"></i>
                <span class="warenav-text">Order Request</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/warehouse">
                <i class="warefa fa-list fa-2x"></i>
                <span class="warenav-text">Warehouse</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/addcredentials">
                <i class="warefa fa-folder-open fa-2x"></i>
                <span class="warenav-text">Add User Credentials</span>
              </a>
            </li>
            <li>
              <a href="/adminalerts">
                <i class="warefa fa-bar-chart-o fa-2x"></i>
                <span class="warenav-text">Notification</span>
              </a>
            </li>
            <li>
              <a href="/orderhistory">
                <i class="warefa fa-bar-chart-o fa-2x"></i>
                <span class="warenav-text">Order History</span>
              </a>
            </li>
          </ul>

          <ul class="warelogout">
            <li>
              <a href="/landingpage">
                <i class="warefa fa-power-off fa-2x"></i>
                <span class="warenav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* nav bar end */}

      {/* backbutton */}
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
      {/* bg-image */}
      <div class="imgbox">
        <img src="https://media.istockphoto.com/vectors/warehouse-workers-are-storing-boxes-on-the-rack-vector-id965959650?k=6&m=965959650&s=612x612&w=0&h=djRQQrn6bNKg2WSFMrLD0mzJpvWZcY_4nz3c1xRYefs=" />
      </div>
    </div>
  );
}
