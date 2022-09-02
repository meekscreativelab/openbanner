import clsx from 'clsx';
import { forwardRef, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  option?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ id, option, label, error, helperText, className, disabled, ...rest }, ref) => {
    return (
      <>
        <fieldset className="flex-1 text-left">
          {label && (
            <label htmlFor={id} className="block text-sm font-medium">
              {label}
            </label>
          )}
          <div className="relative flex items-stretch flex-grow focus-within:z-10 mt-1">
            <textarea
              rows={2}
              id={id}
              ref={ref}
              disabled={disabled}
              className={clsx(
                'placeholder-gray-400 bg-gray-800 block w-full border border-gray-700 rounded-md py-1.5 px-3 focus:border-blue-600 focus:ring-blue-600',
                className
              )}
              {...rest}
            />
          </div>
          {helperText && (
            <p className={clsx('mt-1 text-sm', error && 'text-red-600', !error && 'text-gray-500')}>{helperText}</p>
          )}
        </fieldset>
      </>
    );
  }
);

TextArea.displayName = 'Textarea';
