import React from "react";
import "./LoadingIcon.css";

function LoadingIcon() {
  // https://loading.io/css/
  return (
    <article className="loading-icon">
      <div className="lds-bg"></div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </article>
  );
}

export default LoadingIcon;
