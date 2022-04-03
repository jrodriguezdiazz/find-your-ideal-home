import { FunctionComponent } from "react";
import "./MainHeader.css";

export const MainHeader: FunctionComponent = ({ children }) => {
  return (
    <header className="main-header">
      { children }
    </header>
  );
};
