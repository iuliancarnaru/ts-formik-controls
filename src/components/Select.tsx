import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

type SelectProps = {
  label: string;
  name: string;
  options: {
    key: string;
    value: string;
  }[];
};

export const Select = ({ label, name, options, ...rest }: SelectProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
