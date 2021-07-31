import React, { useState } from "react";
import "./AddCredentialsdes.css";
import { useHistory } from "react-router-dom";
import CredentialsErrorMessage from "./CredentialsErrorMessage";

export default function AddCredentials() {
 
  const initialValues = {
    managerfname: "",
    managerlname: "",
    manageremail: "",
    managermob: ""
  };
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  //onformsubmit
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
  };

  //onchangeevent
  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });
  };
  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.managerfname) {
      errors.managerfname = "*First Name cannot be empty";
    } else if (!onlystr.test(values.managerfname)) {
      errors.managerfname = "*Only alphabets are Permitted";
    }
    if (!values.managerlname) {
      errors.managerlname = "*Last Name cannot be empty";
    } else if (!onlystr.test(values.managerlname)) {
      errors.managerlname = "*Only alphabets are Permitted";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.manageremail) {
      errors.manageremail = "*Mail cannot be blank";
    } else if (!regex.test(values.manageremail)) {
      errors.manageremail = "*Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.managermob) {
      errors.managermob = "*Mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.managermob)) {
      errors.managermob = "*Please enter only number.";
    }

    return errors;
  };

  return (
    <div className="addcredbody">
      {/* -------------------------------------------------------------------------------manager---------------------------------------------------------------------------------------------- */}

      {/* Tabs  */}
      {/* <div className="tabs"> */}
      
      <form className="f1" onSubmit={handleDoSubmit} noValidate>
              
      <div id="tab-3">
        <div className="mahi_holder">
          <div className="container">
            <br />
            <div className="row bg_3">
              <h2 className="credh2">
                <i>Manager Information</i>
              </h2>
            </div>
            <div>
              <form className="f1" onSubmit={handleDoSubmit} noValidate>
                <table class="center" id="credentialstable">
                  <tbody>
                    <tr>
                      <td>
                        <label> FIRST NAME: </label>
                        <span class="xfocus-bg"></span>
                      </td>
                      <td>
                        <div class="xcol-3">
                          <input
                            class="xeffect-7"
                            type="text"
                            name="managerfname"
                            maxLength="20"
                            placeholder="Enter first name"
                            value={formValues.managerfname}
                            onChange={handleOnChange}
                          />

                          <span class="xfocus-border">
                            <i></i>
                          </span>
                        </div>
                      </td>
                      <CredentialsErrorMessage message={formErrors.managerfname} />
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label> LAST NAME:</label>
                        <span class="xfocus-bg"></span>
                      </td>
                      <td>
                        {" "}
                        <div class="xcol-3">
                          <input
                            class="xeffect-7"
                            type="text"
                            name="managerlname"
                            maxLength="20"
                            placeholder="Enter last name"
                            value={formValues.managerlname}
                            onChange={handleOnChange}
                          />
                          <span class="xfocus-border">
                            <i></i>
                          </span>
                        </div>
                      </td>
                      <CredentialsErrorMessage message={formErrors.managerlname} />
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label> EMAIL ADDRESS:</label>
                        <span class="xfocus-bg"></span>
                      </td>
                      <td>
                        {" "}
                        <div class="xcol-3">
                          <input
                            class="xeffect-7"
                            type="text"
                            name="manageremail"
                            maxLength="20"
                            placeholder="Enter email"
                            value={formValues.manageremail}
                            onChange={handleOnChange}
                          />
                          <span class="xfocus-border">
                            <i></i>
                          </span>
                        </div>
                      </td>
                      <CredentialsErrorMessage message={formErrors.manageremail} />
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label> MOBILE NUMBER:</label>

                        <span class="xfocus-bg"></span>
                      </td>
                      <td>
                        <div class="xcol-3">
                          <input
                            class="xeffect-7"
                            type="text"
                            name="managermob"
                            maxLength="10"
                            placeholder="Enter mobile number.."
                            value={formValues.managermob}
                            onChange={handleOnChange}
                          />
                          <span class="xfocus-border">
                            <i></i>
                          </span>
                        </div>
                      </td>
                      <CredentialsErrorMessage message={formErrors.managermob} />
                    </tr>
                  </tbody>
                </table>
                <div className="wrap2">
            <button className="addcredbtn2">Submit</button>
          </div>
              </form>
            </div>
          </div>
          {/* <div className="wrap2">
            <button className="addcredbtn2">Submit</button>
          </div>*/}
        </div><div> 
          {Object.entries(formErrors).length === 0 && submitted && (
            <div>
              <h3>SUBMITTED SUCCESSFULLY</h3>
            </div>
        
      
      </div>
      {/* </div> */}
      {/* card1 end */}
      {/* -------------------------------------------------------------------------------checker---------------------------------------------------------------------------------------------- */}
      {/* tab1  */}
      {/* <div id="tab-1">
        <div className="mahi_holder">
          <div className="container">
            <br />
            <div className="row bg_3">
              <div className="tab1heading">
                <h2 className="credh2">
                  <i>Checker Information</i>
                </h2>
              </div>
              <div>
                <form className="f2" onSubmit={handleDoSubmit1} noValidate>
                  <table class="center" id="credentialstable2">
                    <tbody>
                      <tr>
                        <td>
                          <label> FIRST NAME: </label>
                          <span class="xfocus-bg"></span>
                        </td>
                        <td>
                          <div class="xcol-3">
                            <input
                              class="xeffect-7"
                              type="text"
                              name="fname"
                              maxLength="20"
                              placeholder="Enter first name"
                              value={formValues1.fname}
                              onChange={handleOnChange1}
                            />

                            <span class="xfocus-border">
                              <i></i>
                            </span>
                          </div>
                        </td>
                        <CredentialsErrorMessage message={formErrors.fname} />
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label> LAST NAME:</label>
                          <span class="xfocus-bg"></span>
                        </td>
                        <td>
                          {" "}
                          <div class="xcol-3">
                            <input
                              class="xeffect-7"
                              type="text"
                              name="lname"
                              maxLength="20"
                              placeholder="Enter last name"
                              value={formValues1.lname}
                              onChange={handleOnChange1}
                            />
                            <span class="xfocus-border">
                              <i></i>
                            </span>
                          </div>
                        </td>
                        <CredentialsErrorMessage message={formErrors.lname} />
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label> EMAIL ADDRESS:</label>
                          <span class="xfocus-bg"></span>
                        </td>
                        <td>
                          {" "}
                          <div class="xcol-3">
                            <input
                              class="xeffect-7"
                              type="text"
                              name="email"
                              maxLength="20"
                              placeholder="Enter email"
                              value={formValues.address}
                              onChange={handleOnChange}
                            />
                            <span class="xfocus-border">
                              <i></i>
                            </span>
                          </div>
                        </td>
                        <CredentialsErrorMessage message={formErrors.email} />
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label> MOBILE NUMBER:</label>

                          <span class="xfocus-bg"></span>
                        </td>
                        <td>
                          <div class="xcol-3">
                            <input
                              class="xeffect-7"
                              type="text"
                              name="mob"
                              maxLength="10"
                              placeholder="Enter mobile number.."
                              value={formValues.mob}
                              onChange={handleOnChange}
                            />
                            <span class="xfocus-border">
                              <i></i>
                            </span>
                          </div>
                        </td>
                        <CredentialsErrorMessage message={formErrors.mob} />
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>{" "}
          <div className="wrap1">
            <button className="addcredbtn1">Submit</button>
          </div>
        </div>
      </div> */}
    
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
