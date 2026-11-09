import { Route, Routes } from "react-router";
import { ObjectDashBoard } from "./ObjectsDashboard";
import { ObjectAdd } from "./ObjectAdd";
import { ObjectList } from "./ObjectsList";

function App() {
  return (

    <Routes>
          <Route path="/" element={<ObjectDashBoard/>}>
            <Route path="add" element={<ObjectAdd/>}></Route>
            <Route index element={<ObjectList/>}></Route>
          </Route>
    </Routes>

  );
}
export default App