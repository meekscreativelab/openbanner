import { yupResolver } from '@hookform/resolvers/yup';
import { BannerForm } from 'components/organisms';
import BannerPreview from 'components/organisms/BannerPreview';
import { App } from 'components/templates';
import type { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  banner_background: yup.string().label('Background').optional(),
  project_name: yup.string().label('Project Name').optional(),
  project_logo: yup.mixed().label('Project Logo').optional(),
  your_name: yup.string().label('Your Name').optional(),
  about_mission: yup.string().label('Your Mission').optional(),
  current_mrr: yup.number().label('Current MRR').optional(),
  goal_mrr: yup.number().label('Goal MRR').optional(),
  goal_mrr_date: yup.date().label('Goal MRR Date').optional(),
});

export type BannerFormFields = yup.InferType<typeof schema>;

const Home: NextPage = () => {
  const methods = useForm<BannerFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  return (
    <App>
      <FormProvider {...methods}>
        <main className="mx-auto mt-8 max-w-8xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-4 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                  Coming soon
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
              </p>
              <BannerForm onSubmit={() => null} />
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-8 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <BannerPreview />
            </div>
          </div>
        </main>
      </FormProvider>
    </App>
  );
};

export default Home;
