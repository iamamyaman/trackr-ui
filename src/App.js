import logo from "./logo.svg";
import "./App.css";
import Login from "pages/Login";
import ThemeSwitcher from "./comps/common/ThemeSwitcher";
import Register from "pages/Register";
import { useRoutes } from "react-router";
import { AppRoutes } from "routes/routes";
import NavigationRoutes from "routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationRoutes />
        <ThemeSwitcher />
      </BrowserRouter>
    </div>
  );
}

export default App;
