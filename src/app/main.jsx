import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';

import { AccountDetails } from './account-details';
import { PersonalDetails } from './personal-details';
import { PaymentDetails } from './payment-details';

import 'react-phone-number-input/style.css'

const stepPages = [
  AccountDetails,
  PersonalDetails,
  PaymentDetails
];

export const App = () => {


  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    { label: 'Personal Details', isValid: undefined },
    { label: 'Company Details', isValid: undefined },
    { label: 'Verification', isValid: undefined }
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid
      }));

      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        alert(JSON.stringify(values));
      }
    },
    [step, steps, setSteps, setStep, setFormState, isLastStep]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Stepper style={{backgroundColor:"#2C394B",marginTop:"-1.9rem",paddingTop:"1rem",marginLeft:"-2rem",marginRight:"-2rem",paddingBottom:"0.5rem",color:"white"}} value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div style={{ alignSelf: 'center',border:"1px solid #EEEEEE",padding:"2rem",marginTop:"2rem",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <FormElement style={{ width: 480}}>
              {stepPages[step]}
              <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
              <div
                style={{ justifyContent: 'space-between', alignContent: 'center' }}
                className={'k-form-buttons k-buttons-end'}
              >
                {/* <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span> */}
                <div>
                  {
                    step !== 0 ? (
                      <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                        Previous
                      </Button>
                    ) : undefined
                  }
                  {/* <PhoneInput
                    style={{marginTop:"2rem",marginBottom:"2rem"}}
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} /> */}

                  <Button
                    // success={true}
                    style={{ backgroundColor: "#ea310a", width: "30rem", color: "white",marginTop:"2rem" }}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};
ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);
