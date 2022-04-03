import * as H from "history";
import { MouseEventHandler } from "react";

export interface ButtonInterface {
  size?: string,
  href?: string,
  inverse?: boolean,
  to?: H.LocationDescriptor<string> | ((location: H.Location<string>) => H.LocationDescriptor<string>),
  exact?: string;
  danger?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean;
}
