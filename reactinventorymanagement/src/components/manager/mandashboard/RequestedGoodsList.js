import React from 'react'
import { useHistory } from 'react-router';
export default function RequestedGoodsList() {
    const history = useHistory();
    return (
        <div>
            <div>
      <nav class="mymenu">
        <ul>
          <li>
            <a href="/managerdashboard">
              <b>Dashboard</b>
            </a>
          </li>
          <li>
            <a href="/requestedgoodslist"><b>View Goods</b></a>
          </li>
          <li>
            <a href="/requeststockrefill"><b>Request Refill</b></a>
          </li>
          <li>
            <a href="/manageralert"><b>Notification</b></a>
          </li>
          <li>
            <a href="/landingpage"><b>Logout</b></a>
          </li>
        </ul>
      </nav></div>
      <div className="btnposition">
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
