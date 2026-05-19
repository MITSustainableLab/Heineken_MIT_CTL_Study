import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
      variant === 'primary'
        ? 'bg-brand text-white hover:bg-brand-light active:opacity-90'
        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900',
      className
    )}
    {...props}
  />
);

export default Button;
