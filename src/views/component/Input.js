import React from 'react'

function Input({label,type,name,onChange,value,errors}) {
    // console.log(value)
    return (
        <div className="field">
        <label className="label" id={name}>{label}</label>
        <div className="control">
          <input
            autoComplete="off"
            className={`input ${errors && "is-danger"}`}
            type={type}
            name={name}
            onChange={onChange} 
            value={value}
            required
          />
          {errors && (
            <p className="help is-danger" style={{color : "red"}}>{errors}</p>
          )}
        </div>
      </div>
    )
}

export default Input
