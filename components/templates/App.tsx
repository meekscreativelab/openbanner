interface Props {
  children: React.ReactNode;
}

export const App = ({ children }: Props) => {
  return <div className="relative overflow-hidden bg-white">{children}</div>;
};
