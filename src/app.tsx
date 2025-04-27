import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
