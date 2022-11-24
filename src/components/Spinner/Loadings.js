import React from 'react';

const Loadings = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
  <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-pink-600 rounded-full" role="status" />
    <span className="visually-hidden">Loading...</span>
  </div>
    );
};

export default Loadings;