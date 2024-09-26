export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}
