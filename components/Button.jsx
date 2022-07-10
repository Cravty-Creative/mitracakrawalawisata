import style from "./styles/Button.module.css";

export default function Button({ variant = "primary", type = "button", children = "Button", onClick, className }) {
  switch (variant) {
    case "primary":
      return (
        <button className={`${style["primary"]} ${style["btn"]} ${className ? className : ""}`} type={type} onClick={onClick}>
          {children}
        </button>
      );

    case "secondary":
      return (
        <button className={`${style["secondary"]} ${style["btn"]} ${className ? className : ""}`} type={type} onClick={onClick}>
          {children}
        </button>
      );

    case "play-animation":
      return (
        <button className={style['btn-play']}>
          <div className={style['logo']}></div>
          <div className={`${style['text']} animate-spin-slow`} id="btn-play-text">
            {
              children.split("").map((char, index) => (
                <span key={index} style={{ transform: `rotate(${index * 16.5}deg)` }}>{char}</span>
              ))
            }
          </div>
        </button>
      )

    default:
      break;
  }
}
