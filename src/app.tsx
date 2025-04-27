import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/home";
import PostPage from "./pages/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
