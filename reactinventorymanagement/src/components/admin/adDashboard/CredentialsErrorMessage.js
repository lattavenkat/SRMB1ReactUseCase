import React from "react";

export default function CredentialsErrorMessage({ message, message1 }) {
  return (
    <>
      <div>{message && <span className="error1">{message}</span>}</div>

      <div>{message1 && <span className="error1">{message1}</span>}</div>
    </>
  );
}
