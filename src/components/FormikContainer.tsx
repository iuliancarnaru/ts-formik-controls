import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import * as yup from 'yup';
import { FormikControl } from './FormikControl';

// -------- MOCK FORM DATA ----------

const dropdownOptions = [
  {
    key: 'Select an option',
    value: '',
  },
  {
    key: 'Option 1',
    value: 'option1',
  },
  {
    key: 'Option 2',
    value: 'option2',
  },
  {
    key: 'Option 3',
    value: 'option3',
  },
];

const radioOptions = [
  {
    key: 'Option 1',
    value: 'rOption1',
  },
  {
    key: 'Option 2',
    value: 'rOption2',
  },
  {
    key: 'Option 3',
    value: 'rOption3',
  },
];

// -----------------------------------

type FormValues = {
  email: string;
  description: string;
  selectOption: string;
  radioOption: string;
};

export const FormikContainer = () => {
  const initialValues: FormValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
  };

  const validationSchema: yup.SchemaOf<FormValues> = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    description: yup.string().required('Required'),
    selectOption: yup.string().required('Required'),
    radioOption: yup.string().required('Required'),
  });

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) =>
    console.log(`Form values`, values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<any>) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
