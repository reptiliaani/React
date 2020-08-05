import React from "react";
import clasess from "./Input.css";
const input = (props) => {
  let inputElement = null;
  const inputClasses = [clasess.InputElement];

if (props.invalid && props.shouldValidate && props.touched) 
{
    inputClasses.push(clasess.Invalid)
}





  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={clasess.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={clasess.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={clasess.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={clasess.Input}>
      <label className={clasess.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
