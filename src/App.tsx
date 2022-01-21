import "./App.less";
import { useAuth } from "./Context/auth-context";
import { AuthenticatedApp } from "./containers/authenticated-app";
import { UnauthenticatedApp } from "./containers/unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
