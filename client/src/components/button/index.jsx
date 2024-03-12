import React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

function Button(props) {
  return (
    <button className="my-button" onClick={() => props.action()}>
      <Icon icon={props.icon} />
    </button>
  );
}

export default Button;
