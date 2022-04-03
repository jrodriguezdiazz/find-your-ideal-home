import { FunctionComponent } from "react";
import { CardInterface } from "../../interfaces/card";
import "./Card.css"
export const Card: FunctionComponent<CardInterface> = ({className, style, children}) => {
  return (
    <div className={`card ${className}`}  style={style}>
      { children }
    </div>
  );
};
