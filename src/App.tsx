import { Navigate, Route, Routes } from "react-router-dom";
import { AddMembersContainer, ConfigContainer, MainContainer, ResultContainer } from "./containers";

function App() {
  return (
    <Routes>
      <Route element={<MainContainer />}>
        <Route index element={<Navigate replace to="/add" />} />
        <Route path="*" element={<Navigate replace to="/add" />} />
        <Route path="/add" element={<AddMembersContainer />} />
        <Route path="/config" element={<ConfigContainer />} />
        <Route path="/result" element={<ResultContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
