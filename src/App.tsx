import { Route, Routes } from "react-router-dom";
import { AddMembersContainer, ConfigContainer, MainContainer, ResultContainer } from "./containers";

function App() {
  return (
    <Routes>
      <Route element={<MainContainer />}>
        <Route index path="*" element={<AddMembersContainer />} />
        <Route path="/config" element={<ConfigContainer />} />
        <Route path="/result" element={<ResultContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
