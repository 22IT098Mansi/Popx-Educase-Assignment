import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserAvatar = ({ imageUrl, email }) => (
  <div className="d-flex flex-column flex-sm-row align-items-center mb-4 gap-3">
    <div className="position-relative">
      <img
        src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
        alt="User Avatar"
        className="rounded-circle object-fit-cover"
        style={{ width: '80px', height: '80px' }}
      />
      <div className="position-absolute bottom-0 end-0 translate-middle-x">
        <Camera className="bg-white rounded-circle p-1" style={{ width: '24px', height: '24px' }} />
      </div>
    </div>
    <div className="text-center text-sm-start">
      <h2 className="fs-4 fw-medium text-dark mb-0">Jane Smith</h2>
      <p className="text-secondary mb-0">{email}</p>
    </div>
  </div>
);

const UserProfile = () => {
  const router = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');

    if (!storedEmail) {
      toast.error('Please login to continue');
      router('/login');
    } else {
      setUserEmail(storedEmail);
    }

    const handleStorageUpdate = () => {
      const updatedEmail = localStorage.getItem('userEmail');
      if (updatedEmail !== userEmail) {
        setUserEmail(updatedEmail || '');
      }
    };

    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, [router]);

  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-start py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h1 className="fs-4 fw-semibold text-center text-sm-start mb-3">Account Settings</h1>
                <hr className="border-2 border-dashed mb-4" />

                <UserAvatar
                  imageUrl="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                  email={userEmail}
                />
                
                <hr className="border-2 border-dashed mb-4" />

                <p className="text-secondary text-center text-sm-start mb-4">
                  Welcome to your EduCase profile! Here you can manage your account settings and preferences.
                </p>
                <hr className="border-2 border-dashed mb-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
