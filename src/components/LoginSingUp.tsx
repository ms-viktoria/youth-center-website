import React, { useState } from "react";
import "../styles/login-sing-up.scss";
// import MailIcon from "@mui/icons-material/Mail";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LockIcon from "@mui/icons-material/Lock";


const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState<string | null>(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", confirmPassword: "" });
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

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

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <button className="toggle-btn" onClick={toggleForm}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthForm;
