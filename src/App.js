import "./App.css";
import Menu from "./components/Menu";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <ProtectedRoute path="/login">
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path="/search">
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute path="/favorites">
          <FavoritesPage />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
