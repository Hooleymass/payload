import React from 'react';

const SignInOrProfile = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      <a href="/sign-in" className="btn btn-primary btn-sm btn-outline">
        Sign In
      </a>
      <a href="/sign-up" className="btn btn-secondary btn-sm btn-outline">
        Sign Up
      </a>
    </div>
  );
};

export default SignInOrProfile;
