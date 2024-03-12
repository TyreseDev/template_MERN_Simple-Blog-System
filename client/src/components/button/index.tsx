import type React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

type ButtonProps = {
  action: () => void;
  icon: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="my-button" onClick={() => props.action()}>
      <Icon icon={props.icon} />
    </button>
  );
};

export default Button;
