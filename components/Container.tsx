export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-[1100px] w-full"> {children}</div>;
};
