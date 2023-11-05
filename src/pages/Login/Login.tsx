import AppButton from "../../components/AppButton/AppButton"
import AppTextInput from "../../components/AppTextInput/AppTextInput"
import AppTextLabel from "../../components/AppTextLabel/AppTextLabel"

const Login = () => {
  return (
    <div className="card w-50 mt-4">
        <form  className='add-form'>
            <div className="d-flex" >
                <AppTextLabel text="username" />
                <AppTextInput />
            </div>
            <div className="d-flex">
                <AppTextLabel text="password" />
                <AppTextInput />
            </div>
            <div className="d-flex justify-content-center">
                <AppButton text="Login"></AppButton>
                <AppButton text="Sign In"></AppButton>
            </div>
        </form>
    </div>
  )
}

export default Login