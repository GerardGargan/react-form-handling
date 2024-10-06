import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const { 
    value: emailValue, 
    handleChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur ,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const { 
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
   } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError) {
      console.log('handle error here');
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
      <Input 
        label="Email" 
        id="email"
        type="text"
        name="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur} 
        value={emailValue} 
        error={emailHasError && 'Please enter a valid email'}
      />

      <Input 
        label="Password" 
        id="password"
        type="password"
        name="password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur} 
        value={passwordValue} 
        error={passwordHasError && 'Please enter a valid password'}
      />

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
      </div>
    </form>
  );
}
