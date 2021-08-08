import React, { useState } from "react";
import CredentialsErrorMessage from "./CredentialsErrorMessage";
import "./AddCredentialsdes.css";
import './Common.css';
export default function AddCheckerInfo() {
  //checker
  const initialValues = {
    checkerid:"",
    checkerfname: "",
    checkerlname: "",
    checkerpass:"",
    checkeremail: "",
    checkermob: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [Data, setData] = useState(0);
  //onformsubmit-checker
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
    const chkOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };

    fetch("http://localhost:8080/api/checkerinfo", chkOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        alert("Credentials Submitted");
        console.log(data.id);
        setData(data.id);
      });
  };
  //onchangeevent-checker
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
  // checker
  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;
    if (!values.checkerid) {
      errors.checkerid = "*Mandatory";
    }
    if (!values.checkerfname) {
      errors.checkerfname = "*First Name cannot be empty";
    } else if (!onlystr.test(values.checkerfname)) {
      errors.checkerfname = "*Only alphabets are Permitted";
    }
    if (!values.checkerlname) {
      errors.checkerlname = "*Last Name cannot be empty";
    } else if (!onlystr.test(values.checkerlname)) {
      errors.checkerlname = "*Only alphabets are Permitted";
    }
    if (!values.checkerpass) {
      errors.checkerpass = "*Password cannot be empty";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.checkeremail) {
      errors.checkeremail = "*Mail cannot be blank";
    } else if (!regex.test(values.checkeremail)) {
      errors.checkeremail = "*Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.checkermob) {
      errors.checkermob = "*Mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.checkermob)) {
      errors.checkermob = "*Please enter only number.";
    }

    return errors;
  };
  return (
    <>
      <div>
        <form className="f1" onSubmit={handleDoSubmit} noValidate>
          <table class="center" id="credentialstable">
            <tbody>
            <tr>
                <td>
                  <label> CHECKER ID: </label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="checkerid"
                      maxLength="20"
                      placeholder="Enter Id"
                      value={formValues.checkerid}
                      onChange={handleOnChange}
                    />

                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkerid} />
              </tr>
              <br />
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
                      name="checkerfname"
                      maxLength="20"
                      placeholder="Enter first name"
                      value={formValues.checkerfname}
                      onChange={handleOnChange}
                    />

                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkerfname} />
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
                      name="checkerlname"
                      maxLength="20"
                      placeholder="Enter last name"
                      value={formValues.checkerlname}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkerlname} />
              </tr>
              <br />
              <tr>
                <td>
                  <label>CHECKER PASSWORD :</label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  {" "}
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="checkerpass"
                      maxLength="20"
                      placeholder="Enter Password"
                      value={formValues.checkerpass}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkerpass} />
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
                      name="checkeremail"
                      maxLength="20"
                      placeholder="Enter email"
                      value={formValues.checkeremail}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkeremail} />
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
                      name="checkermob"
                      maxLength="10"
                      placeholder="Enter mobile number.."
                      value={formValues.checkermob}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.checkermob} />
              </tr>
              <tr>
                <div className="wrap1">
                  <button className="addcredbtn1">Submit</button>
                </div>
              </tr>
            </tbody>
            <div>
              {Object.entries(formErrors).length === 0 && submitted && (
                //  alert(formValues.fname+" "+" your form has been submitted sucessfully")
                <div>
                  <br /> <h3 className="prnt1">SUBMITTED SUCCESSFULLY</h3>
                  <br />{" "}
                  <p class="prnt">
                    <b>{formValues.checkerfname}'s credentials has been added!</b>
                  </p>
                  
                </div>
              )}
            </div>
          </table>
        </form>
      </div>
    </>
  );
}
