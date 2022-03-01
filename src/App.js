import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./Shared/Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
