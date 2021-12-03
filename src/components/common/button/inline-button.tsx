import React from "react";
import s from "./button.module.scss";

interface Props {
  text: string;
}

const InlineButton: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ text, ...otherProps }) => {
  return (
    <button {...otherProps} className={s["inline-button"]}>
      {text}
    </button>
  );
};

export default InlineButton;
