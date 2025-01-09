import React, { useState } from "react";
import "../styles/login-sing-up.scss";
import MailIcon from "@mui/icons-material/Mail";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthForm: React.FC = () => {
  const [isSignUP, setIsSignUP] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleForm = () => {
    setIsSignUP(!isSignUP);
    setFormData({ email: "", password: "", confirmPassword: "" });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isSignUP && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isSignUP) {
      console.log("Sign Up Data: ", formData);
    } else {
      console.log("Sign In Data: ", formData);
    }
  };
  return (
    <div className="login-form">
      <h2>{isSignUP ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <MailIcon>Email:</MailIcon>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <PersonOutlineIcon>Password:</PersonOutlineIcon>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="password"
          required
        />
      </div>
      {isSignUP && (
        <div>
          <PersonOutlineIcon>Confirm Password:</PersonOutlineIcon>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="confirmPassword"
            required
          />
        </div>
      )}
      {error && <p>{error}</p>}
      </form>
      <LockIcon />
      <button onClick={toggleForm}>
        {isSignUP
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

//   = () => {
//   return (
//     <div className="header-container">
//       <div className="container-user">
//         <div className="container-user__text">Sing Up</div>
//         <div className="container-user__underline"></div>
//       </div>
//       <div className="container-user__inputs">
//         <div className="container-user__input">
//           <PersonOutlineIcon className="container-user__icon"></PersonOutlineIcon>
//           <input type={"text"} />
//         </div>
//         <div className="container-user__input">
//           <MailIcon className="container-user__icon"></MailIcon>
//           <input type={"email"} />
//         </div>
//         <div className="container-user__input">
//           <LockIcon className="container-user__icon"></LockIcon>
//           <input type={"password"} />
//         </div>
//         <div className="submit-container-user__input">
//           <div
//         </div>
//       </div>
//     </div>
//   );
// };

export default AuthForm;
