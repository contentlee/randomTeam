import { Navigate, Route, Routes } from "react-router-dom";
import { AddMembersPage, ConfigPage, ResultPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/add" />} />
      <Route path="*" element={<Navigate replace to="/add" />} />
      <Route path="/add" element={<AddMembersPage />} />
      <Route path="/config" element={<ConfigPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
