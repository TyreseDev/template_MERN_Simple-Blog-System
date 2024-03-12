import { Icon } from "@iconify/react";

type ButtonProps = {
  action: () => void;
  icon: string;
};

const Button: React.FC<ButtonProps> = (props) => (
  <button
    onClick={() => props.action()}
    type="button"
    className="m-5 p-2.5 w-16 h-16 flex border-0 rounded-xl text-4xl justify-center items-center bg-gray-200 hover:opacity-80 hover:shadow-lg transition-opacity duration-150 ease-in-out"
  >
    <Icon icon={props.icon} />
  </button>
);

export default Button;
