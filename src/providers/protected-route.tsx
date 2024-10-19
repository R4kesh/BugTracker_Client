import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../providers/auth-provider'


interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];  // Array of roles allowed to access the route
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation() 

  if (!isAuthenticated || (user && !allowedRoles.includes(user?.role))) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>
}