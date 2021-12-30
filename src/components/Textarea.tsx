import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

type TextareaProps = {
  label: string;
  name: string;
};

export const Textarea = ({ label, name, ...rest }: TextareaProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
