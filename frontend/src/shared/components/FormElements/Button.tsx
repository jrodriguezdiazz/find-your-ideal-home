import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ButtonInterface } from '../../interfaces/button';

import './Button.css';

export const Button: FunctionComponent<ButtonInterface> = ({
  size,
  href,
  inverse,
  to,
  danger,
  children,
  onClick,
  disabled,
}) => {
  if (href) {
    return (
      <a
        className={`button button--${size || 'default'} ${
          inverse && 'button--inverse'
        } ${danger && 'button--danger'}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        className={`button button--${size || 'default'} ${
          inverse && 'button--inverse'
        } ${danger && 'button--danger'}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${size || 'default'} ${
        inverse && 'button--inverse'
      } ${danger && 'button--danger'}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
