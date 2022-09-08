import { RadioGroup } from '@headlessui/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Input, TextArea } from 'components/atoms';
import { BannerFormFields } from 'pages';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';

interface BannerFormProps {
  onSubmit: SubmitHandler<BannerFormFields>;
}

export const BannerForm = ({ onSubmit }: BannerFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<BannerFormFields>();

  const colors = {
    sublime: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
    oceanic: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
    picture: 'bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400',
    lavender: 'bg-gradient-to-r from-indigo-300 to-purple-400',
    bluecoral: 'bg-gradient-to-r from-blue-400 to-emerald-400',
    purplehaze: 'bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800',
    emerald: 'bg-gradient-to-r from-emerald-500 to-lime-600',
    pinkneon: 'bg-gradient-to-r from-slate-400 to-slate-500',
    messsenger: 'bg-gradient-to-r from-sky-400 to-blue-500',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="banner_background"
        control={control}
        render={({ field: { value, onChange } }) => (
          <RadioGroup value={value} onChange={onChange} className="max-w-sm text-left">
            <RadioGroup.Label className="block text-sm font-medium">Banner background</RadioGroup.Label>
            <div className="mt-2 flex items-center space-x-2">
              {Object.entries(colors).map(([name, color]) => (
                <RadioGroup.Option
                  key={color}
                  value={color}
                  className={({ checked }) =>
                    clsx(
                      'ring-blue-600',
                      checked ? 'ring-2' : '',
                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {name}
                  </RadioGroup.Label>
                  <span aria-hidden="true" className={clsx(color, 'h-8 w-8 rounded-full')} />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      />
      <Controller
        name="project_logo"
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <div>
              <div className="block text-sm font-medium">Product logo</div>
              <label className="mt-2 cursor-pointer inline-flex items-center rounded-md border border-gray-600/50 bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-700 focus:outline-none placeholder-gray-300">
                <ArrowUpTrayIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Upload image
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      const file = e.target.files[0];
                      onChange(Object.assign(file, { preview: URL.createObjectURL(file) }));
                    }
                  }}
                />
              </label>
            </div>
          );
        }}
      />
      <Input
        id="your_name"
        type="text"
        label="Your name"
        error={!!errors.your_name}
        helperText={errors.your_name?.message}
        className="flex-1"
        {...register('your_name')}
      />
      <TextArea
        id="friendly_introduction"
        label="Friendly introduction"
        error={!!errors.friendly_introduction}
        helperText={errors.friendly_introduction?.message}
        className="flex-1"
        {...register('friendly_introduction')}
      />
      <Input
        id="current_mrr"
        type="number"
        min="0"
        step="any"
        label="Current MMR"
        leading="$"
        error={!!errors.current_mrr}
        helperText={errors.current_mrr?.message}
        className="flex-1"
        {...register('current_mrr')}
      />
      <Input
        id="goal_mrr"
        type="number"
        min="0"
        step="any"
        label="Goal MMR"
        leading="$"
        error={!!errors.goal_mrr}
        helperText={errors.goal_mrr?.message}
        className="flex-1"
        {...register('goal_mrr')}
      />
    </form>
  );
};
