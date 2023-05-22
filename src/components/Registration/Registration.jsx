import React, { useState, Fragment } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import GeneralDetails from "../Forms/GeneralDetails";

import validationSchema from "../FormModel/validationSchema";
import registrationFormModel from "../FormModel/registrationFormModel";
import formInitialValues from "../FormModel/formInitialValue";

import useStyles from "./styles";

const steps = ["General details", "Address information", "Review details"];
const { formId, formField } = registrationFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralDetails formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const Registration = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const submitForm = (values, actions) => {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Fragment>
      <Typography component="h1" variant="h4" align="center">
        Registration
      </Typography>
      <Stepper
        activeStep={activeStep}
        className={classes.stepper}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId}>
              {_renderStepContent(activeStep)}

              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <div className={classes.wrapper}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Fragment>
  );
};

export default Registration;
