import { FunctionComponent, ReactNode } from 'react';

type TextErrorProps = {
  children?: ReactNode;
};

export const TextError: FunctionComponent<TextErrorProps> = ({ children }) => {
  return <div className="error">{children}</div>;
};
