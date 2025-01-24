import React from 'react';
import { AlertOctagon } from 'lucide-react';
import Header from '@/app/components/layout/header'
import Link from 'next/link'
const NotFound: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 p-4">
        <Header />
      <div className="text-center max-w-md">
        <AlertOctagon 
          size={100} 
          className="mx-auto mb-6 text-red-500"
        />
        <h1 className="text-4xl font-bold text-white mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-200 font-light mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
        href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;