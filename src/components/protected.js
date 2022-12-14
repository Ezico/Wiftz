import { Navigate } from "react-router-dom";
const Protected = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/adminstrator-access" replace />;
  }
  return children;
};
export default Protected;
