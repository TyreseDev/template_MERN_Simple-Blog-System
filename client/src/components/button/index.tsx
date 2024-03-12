import { Icon } from "@iconify/react";
import "./index.css";

type ButtonProps = {
  action: () => void;
  icon: string;
};

const Button: React.FC<ButtonProps> = (props) => (
  <button className="my-button" onClick={() => props.action()} type="button">
    <Icon icon={props.icon} />
  </button>
);

export default Button;
