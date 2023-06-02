import V from "./Checkers"
import C from "./Constant";

const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
const allowedExtensions = ['jpg', 'png', 'gif'];


export default function validate(values, id, names) {
  let errors = {};
  if (id === "login") {
    errors.email = V.required(values.email,names.email) || V.regexCheck(C.mailregex, values.email)
    errors.password = V.required(values.password,names.password) || V.maxCheck(9, values.password) || V.minCheck(3, values.password)
    // errors.file = V.required(values.file) || V.validateFileType(values.file,allowedTypes ) || V.validateFileExtension(values.file, allowedExtensions)
    errors.checkbox = V.required(values.checkbox,names.checkbox) || V.validateChecked(values.checkbox)
  }
  return errors;
}



