import './AppTextLabel.css'

interface AppTextLabelComponentProps {
    text?: string;
  }

const AppTextLabel: React.FC<AppTextLabelComponentProps> = ({text}) => {
  return (
    <div className='app-text-label'>
        <p>{text}</p>
    </div>
  )
}

export default AppTextLabel
