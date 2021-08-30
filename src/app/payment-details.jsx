import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
// import { CardSelector } from './card-selector';

import {FormMaskedTextBox} from './form-components';

import {cardValidator} from './validators';

export const PaymentDetails = (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '75%', marginRight: '25px' }}>
        <Field
          key={'otp'}
          id={'otp'}
          name={'otp'}
          label={'Enter Your OTP'}
          // label={
          //   'For your Security,we need to verify your identity. We have sent a Five digit code to name@domain.com. Please enter it below.'
          // }
          hint={'Hint: Enter the OTP you received'}
          mask={'0-0-0-0-0'}
          component={FormMaskedTextBox}
          validator={cardValidator}
        />
      </div>
    </div>
  </div>
);
