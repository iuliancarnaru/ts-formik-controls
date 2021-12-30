import { Fragment } from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { TextError } from './TextError';

type RadioButtonsProps = {
  label: string;
  name: string;
  options: {
    key: string;
    value: string;
  }[];
};

export const RadioButtons = ({
  label,
  name,
  options,
  ...rest
}: RadioButtonsProps) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: FieldProps) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
