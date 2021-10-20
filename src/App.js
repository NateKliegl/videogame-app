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

export default function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <ProtectedRoute armor={false} path="/login">
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute armor={true} path="/search">
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute armor={true} path="/favorites">
          <FavoritesPage />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}
