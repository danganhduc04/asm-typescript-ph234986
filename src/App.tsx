import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutDetail from "./components/Layout/LayoutDetail";
import LayoutWebsite from "./components/Layout/LayoutWebsite";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<LayoutWebsite />} />
          <Route path="/detail" element={<LayoutDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
