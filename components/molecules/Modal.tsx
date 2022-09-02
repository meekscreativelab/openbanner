import clsx from 'clsx';
import { NoSsr } from 'components/atoms';
import { useRef } from 'react';

export interface Props {
  open: boolean;
  children: React.ReactNode;
  setOpen?: (open: boolean) => void;
}

export const Modal = ({ open, setOpen = () => null, children }: Props) => {
  const cancelButtonRef = useRef(null);

  return (
    <NoSsr>
      <div
        className={clsx(
          {
            ['hidden']: !open,
            ['block']: open,
          },
          'fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
        )}
      >
        {children}
      </div>
    </NoSsr>
  );
};
