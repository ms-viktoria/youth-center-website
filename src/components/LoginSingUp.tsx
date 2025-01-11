import React, { useState } from "react";
import "../styles/login-sing-up.scss";
// import MailIcon from "@mui/icons-material/Mail";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LockIcon from "@mui/icons-material/Lock";

interface LoginSignUpProps {
  isSignUp: boolean;
  onClose: () => void;
}

const AuthForm: React.FC<LoginSignUpProps> = ({ isSignUp, onClose }) => {
  /*const [isSignUp, setIsSignUp] = useState(false);*/
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSignUpMode, setIsSignUpMode] = useState(isSignUp);

  const toggleForm = () => {
   /* setIsSignUp(!isSignUp);*/
    setFormData({ email: "", password: "", confirmPassword: "" });
    setError(null);
    setIsSignUpMode(!isSignUpMode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(isSignUpMode ? "Sign Up Submitted" : "Login Submitted");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log(isSignUp ? "Sign Up Data:" : "Sign In Data:", formData);
  };

  return (
    <div className="auth-container">
      <h2>{isSignUpMode ? "Sign Up" : "Login"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {isSignUp && (
          <>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {error && <p className="error-message">{error}</p>}

        <button type="submit">{isSignUpMode ? "Sign Up" : "Login"}</button>
      </form>
      <button onClick={toggleForm}>
        {isSignUpMode ? "Switch to Login" : "Switch to Sign Up"}
      </button>
      <button onClick={onClose} style={{ marginTop: "10px" }}>
        Close
      </button>
    </div>
  );
};

export default AuthForm;
