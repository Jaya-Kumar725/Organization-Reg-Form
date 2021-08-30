import * as React from 'react';
// import { render } from 'react-dom';
import { Field } from '@progress/kendo-react-form';

import {
  FormInput,
  // FormAutoComplete,
  // FormRadioGroup,
  FormTextArea,
  FormUpload
} from './form-components';

import { nameValidator, emailValidator } from './validators';

// import { countries, genders } from './data';

export const PersonalDetails = (
  <div>
    <Field
      key={'avatar'}
      id={'avatar'}
      name={'avatar'}
      label={'Company Logo'}
      optional={true}
      hint={'Hint: Upload your company logo'}
      component={FormUpload}
    />

    <Field
      key={'companyName'}
      id={'companyName'}
      name={'companyName'}
      label={'Company Name'}
      component={FormInput}
      validator={nameValidator}
    />

    <Field
      key={'email'}
      id={'email'}
      name={'email'}
      label={'Email ID'}
      hint={'Hint: Enter email address.'}
      type={'email'}
      component={FormInput}
      validator={emailValidator}
    />

    <Field
      key={'jobTitle'}
      id={'jobTitle'}
      name={'jobTitle'}
      label={'Job Title'}
      component={FormInput}
      validator={nameValidator}
    />

    <Field
      key={'about'}
      id={'about'}
      name={'about'}
      label={'About'}
      optional={true}
      component={FormTextArea}
    />
  </div>
);
