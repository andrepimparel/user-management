import AppButton from "../AppButton/AppButton"

const AppNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <AppButton text="Settings" />
                </li>
                <li className="nav-item">
                    <AppButton text="Sign Out" />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default AppNavBar
