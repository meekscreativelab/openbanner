import { Input } from 'components/atoms';
import { BannerFormFields } from 'pages';
import { SubmitHandler, useFormContext } from 'react-hook-form';

interface BannerFormProps {
  onSubmit: SubmitHandler<BannerFormFields>;
}

export const BannerForm = ({ onSubmit }: BannerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<BannerFormFields>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        required
        id="name"
        type="text"
        label="Project name"
        placeholder="Nolly"
        error={!!errors.project_name}
        helperText={errors.project_name?.message}
        {...register('project_name')}
      />
    </form>
  );
};
