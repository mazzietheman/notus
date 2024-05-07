import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { checkLogin } = useAuth();

  const userType = checkLogin();

  if (!userType) {
    return <Navigate to="/" />;
  } else {
    if (userType === "admin") {
      return children;
    } else {
      return <Navigate to="/profile" />;
    }
  }
};
