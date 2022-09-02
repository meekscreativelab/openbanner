import dynamic from 'next/dynamic';

const Ssr = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const NoSsr = dynamic(() => Promise.resolve(Ssr), { ssr: false });
