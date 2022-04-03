import './Avatar.css';
import { FunctionComponent } from "react";
import { AvatarInterface } from "../../interfaces/avatar";

export const Avatar: FunctionComponent<AvatarInterface> = ({className, style, alt, image, width, height}) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
      />
    </div>
  );
};
