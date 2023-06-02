const name = (key) =>{
  console.log(key)
  if(key){ return document.getElementById(key).innerHTML }
  else{ return ""}
}
const V = {
  required: function (val,key) {
    if (!val) {
      return `${  name(key)} required field`;
    }
  },
  regexCheck: function (regex, val) {
    if (!regex.test(val)) {
      return "invalid mail";
    }
  },
  maxCheck: function (num, val) {
    if (val.length > num) {
      return "should be less than " + num;
    }
  },
  minCheck: function (num, val) {
    if (val.length < num) {
      return "should be greater than " + num;
    }
  },
  validateString: function (str, regex) {
    const pattern = new RegExp(regex);
    if (pattern.test(str)) {
      return true;
    }
  },
  validateFileType: function (file, type) {
    const allowedTypes = type;
    const fileType = file.type;
    if (!allowedTypes.includes(fileType)) {
      return `should be of any one type of ${allowedTypes[0]}`;
    }
  },
  validateFileExtension: function (file, extension) {
    const allowedExtensions = extension;
    const fileExtension = file.name.split(".").pop();
    if (!allowedExtensions.includes(fileExtension)) {
      return `should be of any one type ${allowedExtensions[0]}`;
    }
  },
  validateNumber: function (num, min, max) {
    if (num >= min && num <= max) {
      return true;
    }
  },
  validateChecked: function (val) {
    if (val.checked) {
      return "checnkobx";
    }
  },
};

export default V;
