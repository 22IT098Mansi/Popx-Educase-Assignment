import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ onClick, children, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`w-full py-3 sm:py-3 ${
      variant === 'primary'
        ? 'bg-[#6a5bc1] text-white hover:bg-[#5a4ba1]'
        : 'bg-[#d8d0ff] text-[#6a5bc1] hover:bg-[#c8c0ef]'
    } rounded-md text-base sm:text-sm font-medium cursor-pointer transition-colors duration-300 ${
      variant === 'primary' ? 'mb-4' : ''
    }`}
  >
    {children}
  </button>
)

const WelcomePage = () => {
  const router = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5] px-4 py-8 sm:p-5">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full max-w-[320px] sm:max-w-[400px]">
        <div className="pt-[200px] sm:pt-[400px]">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 text-center sm:text-left">
            Welcome to EduCase
          </h1>
          <p className="text-base sm:text-sm text-gray-500 mb-8 text-center sm:text-left">
            Your gateway to educational excellence.<br />
            Join our community today.
          </p>

          <div className="space-y-4">
            <ActionButton onClick={() => router('/signup')}>
              Create Account
            </ActionButton>

            <ActionButton onClick={() => router('/login')} variant="secondary">
              Already Registered? Login
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
