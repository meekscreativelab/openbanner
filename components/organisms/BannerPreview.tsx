import { ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Link } from 'components/atoms';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import { BannerFormFields } from 'pages';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const BannerPreview = () => {
  const [open, setOpen] = useState(false);

  const printRef = useRef<HTMLDivElement>(null);

  const { watch, reset } = useFormContext<BannerFormFields>();

  const { banner_background, project_logo, your_name, friendly_introduction, current_mrr, goal_mrr } = watch();

  const handleDownloadImage = async () => {
    const element = printRef.current;

    if (element) {
      setOpen(true);

      const canvas = await html2canvas(element);

      const data = canvas.toDataURL('image/jpg');

      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }

      reset({
        banner_background: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
        your_name: '',
        friendly_introduction: '',
        project_logo: '',
        current_mrr: 0,
        goal_mrr: 0,
      });
    }
  };

  return (
    <div className="w-full flex flex-col space-y-8 items-center">
      <div
        className={clsx(
          {
            ['hidden']: !open,
            ['block']: open,
          },
          'fixed inset-0 bg-gray-800 bg-opacity-90 overflow-y-auto h-full w-full z-10 flex items-center justify-center'
        )}
      >
        <div className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
            <button
              type="button"
              className="rounded-md text-gray-600 hover:text-gray-500 focus:outline-none"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-start">
            <div className="mt-3 text-center space-y-2">
              <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full inline-flex p-1">
                <Image
                  width={100}
                  height={100}
                  className="inline-block rounded-full"
                  src="/static/profile.jpg"
                  alt="profile"
                />
              </div>
              <h3 className="text-xl font-medium leading-6">Follow the journey</h3>
              <p className="text-sm text-gray-400">
                <Link
                  href="https://twitter.com/meekscreative"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Hello i&apos;m Meek
                </Link>
                , the creator of OpenBanner. Every 2 weeks I send a newsletter with updates from my Product, Marketing
                and Business sides of my startup, subscribe below to follow along!
              </p>
              <script
                async
                src="https://eocampaign1.com/form/0fded421-2a9f-11ed-9a32-0241b9615763.js"
                data-form="0fded421-2a9f-11ed-9a32-0241b9615763"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md overflow-hidden w-full">
        <div
          ref={printRef}
          className={clsx(
            banner_background,
            'relative w-full shadow h-[17rem] flex flex-col items-center justify-center p-8 text-center'
          )}
        >
          <div className="bg-white/20 flex items-center justify-center text-sm absolute top-3 right-3 rounded-full py-0.5 px-3">
            Banner by openbanner.co
          </div>
          <div className="text-sm absolute top-3 left-3">
            Last updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
          <div>
            {project_logo && (
              <Image
                width={100}
                height={30}
                className="object-contain -mb-4"
                src={project_logo.preview}
                alt="Preview"
                onLoad={() => URL.revokeObjectURL(project_logo.preview)}
              />
            )}
            <div className="space-y-3 max-w-sm">
              <h2 className="text-3xl font-semibold">Hi there{your_name ? `, i'm ${your_name}` : ''}</h2>
              {friendly_introduction && (
                <p className="text-base font-normal flex-wrap leading-tight opacity-90">{friendly_introduction}</p>
              )}
              {current_mrr && (
                <p className="text-base font-semibold flex-wrap leading-tight">
                  💸 Revenue: ${Intl.NumberFormat('en', { notation: 'compact' }).format(current_mrr)} MRR
                </p>
              )}
              <div className="absolute bottom-16 right-2 text-sm py-1 px-2 w-36">
                <div>
                  Follow my journey{' '}
                  {goal_mrr ? `to $${Intl.NumberFormat('en', { notation: 'compact' }).format(goal_mrr)} MRR` : ''}
                </div>
              </div>
              <span className="absolute bottom-4 right-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/static/arrow.png" alt="arrow" style={{ width: 29, height: 45 }} />
              </span>
              {/* <svg
              width="29"
              height="45"
              viewBox="0 0 29 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-4 right-8"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.702899 0.959923C0.992298 0.193407 1.84829 -0.193373 2.6148 0.0960263C5.61083 1.22718 11.5005 4.9942 15.4606 12.0937C19.1421 18.6935 21.0939 28.0595 17.6916 40.6447L26.5434 36.1991C27.2756 35.8314 28.1672 36.1269 28.5349 36.859C28.9026 37.5912 28.6072 38.4829 27.875 38.8506L15.9435 44.8429C15.2113 45.2106 14.3197 44.9151 13.952 44.1829L7.95969 32.2514C7.59197 31.5192 7.88743 30.6276 8.6196 30.2599C9.35178 29.8922 10.2434 30.1876 10.6111 30.9198L14.9242 39.5078C18.0075 27.7927 16.1069 19.343 12.8694 13.5391C9.27463 7.09458 3.95541 3.77365 1.5668 2.87183C0.80028 2.58243 0.4135 1.72644 0.702899 0.959923Z"
                fill="currentColor"
              />
            </svg> */}
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
        onClick={handleDownloadImage}
      >
        <ArrowDownTrayIcon className="-ml-1 mr-3 h-5 w-5" />
        Generate Banner
      </button>
    </div>
  );
};

export default BannerPreview;
