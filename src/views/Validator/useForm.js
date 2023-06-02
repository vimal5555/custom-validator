import { useState, useEffect } from 'react';
const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({}); 
  const [names,setNames] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (Object.values(errors).every((x)=> x === undefined) && isSubmitting) {
      callback(values);
    }
    
  }, [errors]); 

  const handleSubmit = (event,id) => {
    if (event) event.preventDefault(); 

    
     setErrors(validate(values,id,names));
     setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    if (event.target.files && event.target.files[0]) {
      setValues(values => ({ ...values, [event.target.name]: event.target.files[0] }));
      setNames(values => ({ ...values, [event.target.name]: event.target.name }));

    }
    else if(event.target.checked && event.target.checked){
      setValues(values => ({ ...values, [event.target.name]: event.target.checked }));
      setNames(values => ({ ...values, [event.target.name]: event.target.name }));

    }
    else if(event.target.value && event.target.value){
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      setNames(values => ({ ...values, [event.target.name]: event.target.name }));

    }
  };

  const initialSetting = (data) =>{
    const obj = Object.fromEntries(
      data.map((value, index) => [value, value])
    );
    const obj1 = Object.fromEntries(
      data.map((value, index) => [value, ""])
    );
    setNames(obj)
    setValues(obj1)
  }
  
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    setValues,
    initialSetting
  }
};

export default useForm;