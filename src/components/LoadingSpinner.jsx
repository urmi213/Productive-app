import React from 'react';

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-base-100 bg-opacity-50 flex items-center justify-center z-50">
    <div className="text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-4">Loading...</p>
    </div>
  </div>
);

export default LoadingSpinner;
