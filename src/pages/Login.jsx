import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormInput = ({ id, label, type, value, onChange, placeholder, required }) => (
  <div className="form-floating mb-3">
    <input
      type={type}
      id={id}
      name={id}
      autoComplete={type === 'password' ? 'new-password' : 'off'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="form-control"
    />
    <label htmlFor={id} className="text-secondary">
      {label}
    </label>
  </div>
);

const UserAuthentication = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const router = useNavigate();

  useEffect(() => {
    setUserEmail('');
    setUserPassword('');
  }, []);

  const handleAuthentication = (e) => {
    e.preventDefault();
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPassword', userPassword);
    router('/profile');
  };

  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-start py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-sm-5">
                <h1 className="fs-2 fw-semibold text-center text-sm-start mb-2">
                  Sign in to your<br />EduCase account
                </h1>
                <p className="text-secondary text-center text-sm-start mb-4">
                  Welcome back! Please enter your credentials to access your account.
                </p>

                <form onSubmit={handleAuthentication} autoComplete="off">
                  <FormInput
                    id="userEmail"
                    label="Email Address"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                  />

                  <FormInput
                    id="userPassword"
                    label="Password"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 mt-3"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;
