import React from 'react'
import { useHistory } from 'react-router';
export default function AdminAlerts() {
    const history = useHistory();
    return (
        <div>
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
