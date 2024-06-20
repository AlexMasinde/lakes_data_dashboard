import { useAuthContext } from "@/contexts/authContext";
import Dashboard from "@/pages/dashboard";
import Login from "./login";

export default function AuthenticationSwitcher() {
  const { user } = useAuthContext();
  console.log("Current User", user);
  return <>{user ? <Dashboard /> : <Dashboard />}</>;
}
