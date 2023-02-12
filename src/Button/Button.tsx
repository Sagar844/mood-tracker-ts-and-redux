import {
  ButtonHTMLAttributes,
  createContext,
  FC,
  useContext,
  useState,
} from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, className, size, ...rest }) => {
  console.log("theme is", theme);

  let themeClasses = "text-white";

  if (theme == "secondary") {
    themeClasses = "bg-red-500";
  }

  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = "text-sm";
      break;
    case "medium":
      sizeClass = "text-xl";
      break;
    case "large":
      sizeClass = "text-3xl";
  }

  return (
    <button
      {...rest}
      className={
        "px-2 py-1 border rounded-md " +
        className +
        " " +
        themeClasses +
        " " +
        sizeClass
      }
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};

export default Button;
