import React, { useState , useEffect} from "react";
import './Vendorlogindes.css';
import VnErrorMessage from "./VnErrorMessage";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function VendorLogin() {
  const initialValues = {
    uname: "",
    pass: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);

  const [apiValues, setApiValues] = useState({});

   useEffect(() => {
   
    axios.get("http://localhost:8000/vendor")
    .then((x) => {
      console.warn("form api data", x);
      setApiValues(x.data);
    });
    
   }, [])

  //onformsubmit
  const handleDoSubmit = (e1) => {
    e1.preventDefault();
    setformErrors(validate(formValues));
    console.log("===" + Object.entries(formErrors).length);
    //  setSubmitted(true);
  };
  //onchangeevent
  const handleOnChange = (e2) => {
    const isInternalExternal = e2.target.type === "checkbox";

    const { name, value } = e2.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? e2.target.checked : value,
      };
    });
  };

  useEffect(() => {
    if (submitted) {
       history.push('/vendordashboard');
    }
  }, [submitted, history])

  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.uname) {
      errors.uname = "*User Name cannot be empty";
    } else if (!onlystr.test(values.uname)) {
      errors.uname = "*Only alphabets are Permitted";
    }
    if (!values.pass) {
      errors.pass = "Required";
    }
    if (Object.keys(errors).length === 0) {
      if (
        apiValues[0].uname === formValues.uname &&
        apiValues[0].passs === formValues.pass
      ) {
        setSubmitted(true);
      } else {
        console.warn("Please check user name aned password!");
          history.push("/");
      }
    }
    return errors;
  };

  return (
    <div className="vendorloginbody">
       <h1>Vendor Login</h1>
      <form className="vendorlogdes" onSubmit={handleDoSubmit} noValidate>
        <div className="vendor-control">
          <h1 className="vendor-h1">LOGIN</h1>
        </div>
        
          <input
            type="text"
            name="uname"
            maxLength="20"
            placeholder="Enter first name"
            value={formValues.uname}
            onChange={handleOnChange}
          />
          <VnErrorMessage message={formErrors.uname} />
        
          <input
            type="password"
            name="pass"
            placeholder="Enter password"
            value={formValues.pass}
            onChange={handleOnChange}
          />
          <VnErrorMessage message={formErrors.pass} />
       
        <button type="submit">
          <div className="text">Log In</div>
        </button>
        <div>
          {Object.entries(formErrors).length === 0 && submitted && (
            <div>
              <h3>SUBMITTED SUCCESSFULLY</h3>
            </div>
          )}
        </div>
      </form> 
    </div>
  );
}
