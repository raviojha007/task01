import * as Yup from "yup";

export const todoSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is Required"),
  lastName: Yup.string(),
  gender: Yup.string(),
});
