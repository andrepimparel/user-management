import { useState } from "react";

interface AppTextInputComponentProps {
    min?: number;
    value?: any;
    onChange?: any;
  }

const AppTextInput: React.FC<AppTextInputComponentProps>  = ({ min, value, onChange }) => {

  return (
    <>
      <input type='text' minLength={min}
      value={value}  onChange={(e) => onChange(e.target.value)}/> 
    </>

  )
}

AppTextInput.defaultProps = {
  min: 1,
  onChange: () => {}
}



export default AppTextInput