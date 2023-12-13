import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import RulesPage from "./Pages/RulesPage/RulesPage";
import NotificationsPage from "./Pages/NotificationsPage/NotificationsPage";
import EducationsPage from "./Pages/EducationsPage/EducationsPage";
import "./theme/App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/notif" element={<NotificationsPage />} />
          <Route path="/education" element={<EducationsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
