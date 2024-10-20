import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/auth-provider';

interface ProtectedRouteProps {
  allowedRoles: string[]; // Array of roles allowed to access the route
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Check authentication and role
  if (!isAuthenticated || (user && !allowedRoles.includes(user?.role))) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Render child routes
  return <Outlet />;
}
