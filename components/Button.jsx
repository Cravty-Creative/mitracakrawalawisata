import style from "./styles/Button.module.css";

export default function Button({
  variant = "primary",
  type = "button",
  children = "Button",
  onClick,
  className,
}) {
  switch (variant) {
    case "primary":
      return (
        <button
          className={`${style["primary"]} ${style["btn"]} ${
            className ? className : ""
          }`}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      break;
  }
}
