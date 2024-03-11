import FormLogin from "../components/form-login/FormLogin";
import NavbarComponentWithoutLogIn from "../components/navbar-component/NavbarComponentWithoutLogIn";

const Login = () => {
  return (
    <>
    <NavbarComponentWithoutLogIn/>
      <FormLogin></FormLogin>
    </>
  )
}

export default Login;