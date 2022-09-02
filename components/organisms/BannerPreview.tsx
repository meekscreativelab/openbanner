import clsx from 'clsx';
import Image from 'next/image';
import { BannerFormFields } from 'pages';
import { useFormContext } from 'react-hook-form';

const BannerPreview = () => {
  const { watch } = useFormContext<BannerFormFields>();

  const { banner_background, project_logo, your_name, friendly_introduction, current_mrr, goal_mrr } = watch();

  return (
    <div
      className={clsx(
        banner_background,
        'relative w-full rounded-md shadow h-60 flex flex-col items-center justify-center p-8 text-center space-y-2'
      )}
    >
      {project_logo && (
        <Image
          width={100}
          height={30}
          className="object-contain"
          src={project_logo.preview}
          alt="Preview"
          onLoad={() => URL.revokeObjectURL(project_logo.preview)}
        />
      )}
      {your_name && <h2 className="text-2xl font-semibold">Hi, i&apos;m {your_name}</h2>}
      {friendly_introduction && (
        <p className="text-md font-normal max-w-xs flex-wrap leading-tight opacity-90 text-sm">
          {friendly_introduction}
        </p>
      )}
      {current_mrr && (
        <p className="text-md font-medium max-w-xs flex-wrap leading-tight text-lg">
          💸 Revenue: ${Intl.NumberFormat('en', { notation: 'compact' }).format(current_mrr)} MRR
        </p>
      )}
      {goal_mrr && (
        <div className="space-x-2 space-y-2 flex flex-col justify-center items-center absolute bottom-4 right-4 max-w-xs text-sm">
          <div>Follow my journey to ${Intl.NumberFormat('en', { notation: 'compact' }).format(goal_mrr)} MRR</div>
          <svg width="29" height="45" viewBox="0 0 29 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.702899 0.959923C0.992298 0.193407 1.84829 -0.193373 2.6148 0.0960263C5.61083 1.22718 11.5005 4.9942 15.4606 12.0937C19.1421 18.6935 21.0939 28.0595 17.6916 40.6447L26.5434 36.1991C27.2756 35.8314 28.1672 36.1269 28.5349 36.859C28.9026 37.5912 28.6072 38.4829 27.875 38.8506L15.9435 44.8429C15.2113 45.2106 14.3197 44.9151 13.952 44.1829L7.95969 32.2514C7.59197 31.5192 7.88743 30.6276 8.6196 30.2599C9.35178 29.8922 10.2434 30.1876 10.6111 30.9198L14.9242 39.5078C18.0075 27.7927 16.1069 19.343 12.8694 13.5391C9.27463 7.09458 3.95541 3.77365 1.5668 2.87183C0.80028 2.58243 0.4135 1.72644 0.702899 0.959923Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default BannerPreview;
