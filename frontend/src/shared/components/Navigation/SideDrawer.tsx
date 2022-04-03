import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { SideDrawerInterface } from "../../interfaces/side-drawer";
import "./SideDrawer.css";

export const SideDrawer: FunctionComponent<SideDrawerInterface> = ({ children, show, onClick }) => {
  const content = (
    <CSSTransition in={ show } timeout={ 200 } classNames={ "slide-in-left" } mountOnEnter unmountOnExit>
      
      <aside className="side-drawer" onClick={ onClick }>
        { children }
      </aside>
    </CSSTransition>
  );
  
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook")!);
};
