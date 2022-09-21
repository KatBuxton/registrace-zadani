import React, { useState, useEffect } from 'react';
import './style.css';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(user));
    setIsValid(true);
    console.log(user);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).lenght === 0 && isValid) {
    }
  }, [errors]);

  useEffect(() => {
    if (user.email.indexOf('@') >= 0 && user.username.length === 0) {
      setUser({
        ...user,
        username: user.email.substring(0, user.email.indexOf('@')),
      });
    }
  }, [user.email]);

  const validate = (values) => {
    const errorMessages = {};
    if (!values.email) {
      errorMessages.email = 'Email is required';
    }
    if (!values.password) {
      errorMessages.password = 'Password is required';
    }
    if (values.passwordConfirm !== values.password) {
      errorMessages.passwordConfirm = "Passwords don't match";
    }
    return errorMessages;
  };

  return (
    <div className="registration">
      <h1>REGISTRATION</h1>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email}
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password}
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm}

        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};
