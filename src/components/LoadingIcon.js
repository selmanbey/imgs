import React from "react";
import "./LoadingIcon.css";

function LoadingIcon() {
  // https://loading.io/css/
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingIcon;
