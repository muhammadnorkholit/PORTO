import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Index";
import Porto from "./pages/Porto";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/porto/:slug" element={<Porto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
