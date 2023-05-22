import checkoutFormModel from "./registrationFormModel";
import * as Yup from "yup";

const {
  formField: { firstName, lastName },
} = checkoutFormModel;

const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
  }),
];
export default validations;
