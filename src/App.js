import "./default.scss";
import { Switch, Route } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
