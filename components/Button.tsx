import React from "react";


const buttonColors = {
  blue: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white",
  blueGray: "bg-white hover:text-blueGray-600 border border-blueGray-200 hover:border-blueGray-300 text-blueGray-500",
};

interface ButtonProps {
  color?: keyof typeof buttonColors;
}

const Button: React.FC<ButtonProps> = ({ color = "blueGray", className, children, ...props }) => {

  const colorClasses = buttonColors[color] || buttonColors.blueGray;

  const newClassName = [
    "inline-block py-4 px-8 text-xs text-center font-semibold leading-none rounded",
    colorClasses,
    className
  ].join(" ");
  
  return <button className={newClassName} {...props}>{ children }</button>;
};

export default Button;