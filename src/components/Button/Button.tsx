import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

