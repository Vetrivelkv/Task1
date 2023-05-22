import registrationFormModel from "./registrationFormModel";
const {
  formField: { firstName, lastName },
} = registrationFormModel;

const formInitialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
};

export default formInitialValues;
