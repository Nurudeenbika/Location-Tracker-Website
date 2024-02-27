import "./login.css";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <div className="header-and-login-page">
      <Header />
      <div className="login-container">
        <div className="login-page">
          <span className="login-title">Welcome Back</span>
          <span className="login-subtitle">
            Log in to your account to continue tracking and recording your
            location.
          </span>

          <div className="login-label-and-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="login-label-and-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="login-checkbox-and-text">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <span className="login-forgot-password">Forgot password?</span>

          <button className="login-button">Login</button>

          <span className="login-signup-text">
            Don't have an account ? <span>Sign Up</span>
          </span>

          <span className="terms-and-conditions-text">
            By logging in, you are agreeing to our Terms of Service and Privacy
            Policy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
