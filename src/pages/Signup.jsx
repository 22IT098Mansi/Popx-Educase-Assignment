import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FormInput = ({ id, label, type, value, onChange, placeholder, required }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      autoComplete={type === 'password' ? 'new-password' : 'off'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const RadioGroup = ({ label, name, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex gap-4">
      <div className="flex items-center">
        <input
          type="radio"
          id={`${name}Yes`}
          name={name}
          value="yes"
          checked={value === 'yes'}
          onChange={onChange}
          required={required}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label className="ml-2 text-sm text-gray-700" htmlFor={`${name}Yes`}>
          Yes
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id={`${name}No`}
          name={name}
          value="no"
          checked={value === 'no'}
          onChange={onChange}
          required={required}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label className="ml-2 text-sm text-gray-700" htmlFor={`${name}No`}>
          No
        </label>
      </div>
    </div>
  </div>
);

const UserRegistration = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [isAgencyUser, setIsAgencyUser] = useState(null);
  const router = useNavigate();

  useEffect(() => {
    setUserFullName('');
    setUserPhone('');
    setUserEmail('');
    setUserPassword('');
    setUserCompany('');
    setIsAgencyUser(null);
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();

    const existingEmail = localStorage.getItem('userEmail');
    if (userEmail && existingEmail === userEmail) {
      toast.error('Email already registered');
      return;
    }

    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPassword', userPassword);
    localStorage.setItem('userFullName', userFullName);
    localStorage.setItem('userPhone', userPhone);
    localStorage.setItem('userCompany', userCompany);
    localStorage.setItem('isAgencyUser', isAgencyUser);

    toast.success('Account created successfully!');

    router('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-8">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h1 className="text-2xl font-semibold text-center sm:text-left mb-6">
            Create your <br className="hidden sm:block" /> EduCase account
          </h1>

          <form onSubmit={handleRegistration} autoComplete="off">
            <FormInput
              id="userFullName"
              label="Full Name"
              type="text"
              value={userFullName}
              onChange={(e) => setUserFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />

            <FormInput
              id="userPhone"
              label="Phone Number"
              type="text"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />

            <FormInput
              id="userEmail"
              label="Email Address"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />

            <FormInput
              id="userPassword"
              label="Password"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <FormInput
              id="userCompany"
              label="Company Name"
              type="text"
              value={userCompany}
              onChange={(e) => setUserCompany(e.target.value)}
              placeholder="Enter company name"
            />

            <RadioGroup
              label="Are you an Agency?"
              name="agency"
              value={isAgencyUser}
              onChange={(e) => setIsAgencyUser(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-6"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
