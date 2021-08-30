import * as React from 'react';

import { Field } from '@progress/kendo-react-form';


import PhoneInputField from './phone';

import {
  FormInput,
  FormRadioGroup,
  FormAutoComplete
} from './form-components';

import {
  userNameValidator,
} from './validators';

import { countries, genders, states } from './data';

import { requiredValidator } from './validators';
export const AccountDetails = (
  <div>
    <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'Full Name'}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
    />
    <Field
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Country'}
      hint={'Hint: Start Typing'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    <Field
      key={'state'}
      id={'state'}
      name={'state'}
      label={'State'}
      type={'email'}
      data={states}
      component={FormAutoComplete}
      validator={requiredValidator}

 
    />

    <br></br>
    <label>Phone</label>
    <br></br>
    <br></br>

    <Field
      label={'phone'}
      type="tel"
      name="phone_number"
      component={PhoneInputField}
    />



  </div>
);
