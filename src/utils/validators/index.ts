import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'validation.required',
  },
});

export default Yup;
