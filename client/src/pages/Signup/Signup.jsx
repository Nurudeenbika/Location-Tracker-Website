import Header from "../../components/Header/Header";
import "./signup.css";

const Signup = () => {
  return (
    <div className="header-and-signup-page">
      <Header />

      <div className="signup-page-container">
        <div className="signup-page">
          <span className="signup-title">Create an account</span>

          <div className="login-label-and-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="login-label-and-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className="login-label-and-input">
            <label htmlFor="confrimPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </div>

          <div className="login-checkbox-and-text">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          <div className="login-checkbox-and-text">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">
              I consent to allow location tracking and recording.
            </label>
          </div>

          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
