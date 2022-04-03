import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { ModalOverlayInterface } from "../../interfaces/modal-overlay";
import "./Modal.css";

const ModalOverlay: FunctionComponent<ModalOverlayInterface> = ({ style, className }) => {
  const content = (
    <div className={ `modal ${ className }` } style={ style }>

    </div>
  );
  return ReactDOM.createPortal(
    content
    ,
    document.getElementById("modal-hook")!
  );
};

export const Modal = () => {
  return (
    <div>

    </div>
  );
};
