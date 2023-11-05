import { useState } from "react";

interface AppTextInputComponentProps {
    min?: number;
  }

const AppTextInput: React.FC<AppTextInputComponentProps>  = ({ min }) => {

  const [text, setText] = useState('')
  return (
    <>
      <input type='text' minLength={min}
      value={text} onChange={(e) => setText(e.target.value)}/> 
    </>

  )
}

AppTextInput.defaultProps = {
  min: 1,
}



export default AppTextInput