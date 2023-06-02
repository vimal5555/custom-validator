import React from "react";
import { useState, useEffect } from "react";
import useForm from "../Validator/useForm";
import validate from "../Validator/Validators";
import Input from "../component/Input";

function Login() {
  const { values, errors, handleChange, handleSubmit ,setValues,initialSetting} = useForm(
    result,
    validate
  );
  // useEffect(() => {
  //  setValues({email : "test@123"})
  // }, [])
useEffect(() => {
let a = ["email", "password", "checkbox"]
initialSetting(a)

}, [])

  function result(data) {

    console.log("result1", data );
  }
  
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={(e) => handleSubmit(e, "login")} noValidate>
         
              <Input  label="Email Address" type="email" name="email" onChange={handleChange} value={values.email || ""} errors={errors.email}/>
              <Input  label="Password" type="password" name="password" onChange={handleChange} value={values.password || ""} errors={errors.password}/>
              {/* <Input  label="file" type="file" name="file" onChange={handleChange} value={values.file  || ""} errors={errors.file}/> */}
              <Input  label="checkbox" type="checkbox" name="checkbox" onChange={handleChange} value={values.checkbox || ""} errors={errors.checkbox}/>

             
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
