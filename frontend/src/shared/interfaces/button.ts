import { MouseEventHandler } from 'react';

export interface ButtonInterface {
  size?: string;
  href?: string;
  inverse?: boolean;
  to?: string;
  exact?: string;
  danger?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: any; // TODO: define children type
}
