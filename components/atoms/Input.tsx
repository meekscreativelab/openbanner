import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  option?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  error?: boolean;
  helperText?: string;
  leading?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, option, label, error, helperText, disabled, leading, className, ...rest }, ref) => {
    return (
      <fieldset className="flex-1 text-left">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <div className="mt-1 relative">
          {leading && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{leading}</span>
            </div>
          )}
          <input
            type="text"
            id={id}
            ref={ref}
            disabled={disabled}
            className={clsx(
              'block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm',
              { ['pl-7']: leading },
              className
            )}
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
    );
  }
);

Input.displayName = 'Input';
