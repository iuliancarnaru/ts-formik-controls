import { FieldAttributes } from 'formik';
import { Input } from './Input';
import { RadioButtons } from './RadioButtons';
import { Select } from './Select';
import { Textarea } from './Textarea';

type FormikControlProps = FieldAttributes<any> & {
  control: string;
};

export const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};
