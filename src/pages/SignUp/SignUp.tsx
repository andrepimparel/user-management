import AppButton from "../../components/AppButton/AppButton"
import AppTextInput from "../../components/AppTextInput/AppTextInput"
import AppTextLabel from "../../components/AppTextLabel/AppTextLabel"

const SignUp = () => {
  return (
    <div className="card w-50 mt-4">
        <form  className='add-form'>
            <div className="d-flex" >
                <AppTextLabel text="Username" />
                <AppTextInput />
            </div>
            <div className="d-flex">
                <AppTextLabel text="Email" />
                <AppTextInput />
            </div>
            <div className="d-flex">
                <AppTextLabel text="Password" />
                <AppTextInput />
            </div>
            <div className="d-flex">
                <AppTextLabel text="Confirm Password" />
                <AppTextInput />
            </div>
            <div className="d-flex justify-content-center">
                <AppButton text="Sign Up"></AppButton>
                <AppButton text="Cancel"></AppButton>
            </div>
        </form>
    </div>
  )
}

export default SignUp