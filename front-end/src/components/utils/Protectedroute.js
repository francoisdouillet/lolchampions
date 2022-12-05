
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
  return isAuthenticated ? children : <Navigate to="/auth"/>;
}

export default ProtectedRoute;