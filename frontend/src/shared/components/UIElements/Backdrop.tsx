import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { BackdropInterface } from "../../interfaces/backdrop";

import "./Backdrop.css";

export const Backdrop: FunctionComponent<BackdropInterface> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className={ "backdrop" } onClick={ onClick } />,
    document.getElementById("backdrop-hook")!
  );
};
