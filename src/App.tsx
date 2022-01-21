import "./App.css";
import { ProjectList } from "./containers/project-list";
import { LoginContainer } from "./containers/login";

function App() {
  return (
    <div className="App">
      <LoginContainer />
      {/*<ProjectList />*/}
    </div>
  );
}

export default App;
