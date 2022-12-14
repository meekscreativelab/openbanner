import { yupResolver } from '@hookform/resolvers/yup';
import { BannerForm } from 'components/organisms';
import BannerPreview from 'components/organisms/BannerPreview';
import { App } from 'components/templates';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  banner_background: yup.string().label('Background').optional(),
  project_logo: yup.mixed().label('Project Logo').optional(),
  your_name: yup.string().label('Your Name').optional(),
  friendly_introduction: yup.string().label('Friendly Introduction').optional(),
  current_mrr: yup.number().label('Current MRR').optional(),
  goal_mrr: yup.number().label('Goal MRR').optional(),
});

export type BannerFormFields = yup.InferType<typeof schema>;

const Home: NextPage = () => {
  const methods = useForm<BannerFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      banner_background: 'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
    },
  });

  return (
    <App>
      <Head>
        <title>OpenBanner – Simple informative twitter cover banner for those who #buildinpublic</title>
        <meta
          name="title"
          content="OpenBanner – Simple informative twitter cover banner for those who #buildinpublic"
        />
        <meta
          name="description"
          content="One click to instantly create beautiful informative Twitter banners to #buildinpublic."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="OpenBanner – Simple informative twitter cover banner for those who #buildinpublic"
        />
        <meta
          property="og:description"
          content="One click to instantly create beautiful informative Twitter banners to #buildinpublic."
        />
        <meta property="og:image" content="https://openbanner.co/static/poster.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="OpenBanner – Simple informative twitter cover banner for those who #buildinpublic"
        />
        <meta
          property="twitter:description"
          content="One click to instantly create beautiful informative Twitter banners to #buildinpublic."
        />
        <meta property="twitter:image" content="https://openbanner.co/static/poster.png" />
      </Head>
      <FormProvider {...methods}>
        <main className="mx-auto mt-8 max-w-7xl px-4">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <BannerForm onSubmit={() => null} />
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0 lg:flex lg:items-center">
              <BannerPreview />
            </div>
          </div>
        </main>
      </FormProvider>
    </App>
  );
};

export default Home;
