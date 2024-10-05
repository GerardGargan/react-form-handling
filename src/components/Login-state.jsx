import { useState } from "react";
import Input from "./Input";

export default function Login() {

  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false
  });

  const isEmailInvalid = isEdit.email && !userInput.email.includes('@');
  const isPasswordInvalid = isEdit.password && userInput.password.length < 6;

  function handleChange(identifier, value) {
    setUserInput(prevState => ({
      ...prevState,
      [identifier]: value
    }));
    setIsEdit(prevState => ({
      ...prevState,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier) {
    setIsEdit(prevState => ({
      ...prevState,
      [identifier]: true
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
      <Input 
        label="Email" 
        id="email"
        type="email"
        name="email"
        onBlur={() => handleInputBlur('email')} 
        value={userInput.email} 
        onChange={(event) => handleChange('email', event.target.value)}
        error={isEmailInvalid && 'Please enter a valid email'}
      />

      <Input 
        label="Password" 
        id="password"
        type="password"
        name="password"
        onBlur={() => handleInputBlur('password')} 
        value={userInput.password} 
        onChange={(event) => handleChange('password', event.target.value)}
        error={isPasswordInvalid && 'Please enter a valid password'}
      />

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
      </div>
    </form>
  );
}
