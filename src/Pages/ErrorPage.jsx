import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary">404</div>
        <h1 className="text-4xl font-bold mt-4">Page Not Found</h1>
        <p className="mt-4 text-lg">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage