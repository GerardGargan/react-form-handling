import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} value={userInput.email} onChange={(event) => handleChange('email', event.target.value)} />
          <div className="control-error">{isEmailInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onBlur={() => handleInputBlur('password')} value={userInput.value} onChange={(event) => handleChange('email', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
