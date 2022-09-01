import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  option?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, option, label, error, helperText, disabled, ...rest }, ref) => {
    return (
      <>
        <fieldset>
          {label && (
            <label htmlFor={id} className="text-sm text-gray-500">
              {label}
            </label>
          )}
          <div className="relative flex items-stretch flex-grow focus-within:z-10 mt-1">
            <input
              type="text"
              id={id}
              ref={ref}
              disabled={disabled}
              className="placeholder-gray-400 block w-full border border-gray-300 rounded-l py-1.5 px-3 focus:outline-none focus:ring-2 focus:z-10 focus:ring-blue-200 focus:border-blue-400 sm:text-sm disabled:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              {...rest}
            />
          </div>
          {helperText && (
            <p
              className={clsx('mt-1 text-sm', {
                ['text-red-600']: error,
                ['text-gray-500']: !error,
              })}
            >
              {helperText}
            </p>
          )}
        </fieldset>
      </>
    );
  }
);

Input.displayName = 'Input';
