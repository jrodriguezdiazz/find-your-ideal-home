import { MouseEventHandler } from 'react';

export interface SideDrawerInterface {
  show: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}
