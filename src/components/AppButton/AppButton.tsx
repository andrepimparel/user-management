import "./AppButton.css"

interface AppButtonComponentProps {
    onClick?: (() => any);
    text?: string
  }

const AppButton: React.FC<AppButtonComponentProps>  = ({ onClick, text }) => {
  return (
    <button  
        className='btn btn-primary'
        onClick={onClick}
        >
        {text}
        </button>
  )
}

AppButton.defaultProps = {

}



export default AppButton