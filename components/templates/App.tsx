import { Link, Logo } from 'components/atoms';

interface Props {
  children: React.ReactNode;
}

export const App = ({ children }: Props) => {
  return (
    <div className="relative overflow-hidden" onMouseLeave={() => console.log('Leave')}>
      <header className="border-b border-gray-800/75">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 py-2 justify-between">
            <div>
              <Link href="/">
                <Logo />
              </Link>
              <div className="text-xs text-gray-400 mt-0.5">
                Simple informative twitter cover banner for those building in public
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4 text-gray-200 hover:text-white">
              <span className="text-gray-400 text-sm">
                Built by{' '}
                <Link
                  className="text-gray-100 hover:text-gray-300"
                  href="https://twitter.com/meekscreative"
                  target="_blank"
                  rel="noreferrer"
                >
                  @meekscreative
                </Link>
              </span>
              <span className="h-6 w-px bg-gray-700" aria-hidden="true"></span>
              <Link
                href="https://github.com/meekscreativelab/openbanner"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};
