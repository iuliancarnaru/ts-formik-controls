import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

type InputProps = {
  label: string;
  name: string;
};

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
