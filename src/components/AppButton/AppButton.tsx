import "./AppButton.css"

interface AppButtonComponentProps {
    onClick?: (() => any);
    text?: string;
    isSelected?: boolean;
    type?: string;
  }

const AppButton: React.FC<AppButtonComponentProps>  = ({ onClick, text, isSelected,type }) => {
  return (
    <button  
        className={'btn ' + (isSelected ? 'btn-outline-'+type+' ' : 'btn-'+type+' ')}
        onClick={onClick}
        >
        {text}
        </button>
  )
}

AppButton.defaultProps = {
  isSelected: false,
  type: "primary"
}



export default AppButton