import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* We wrap the component in ErrorBoundary to catch the specific error 
        thrown by ErrorProneComponent. 
      */}
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;