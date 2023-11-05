import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./pages/Restaurant";
import AddList from "./pages/AddList";
import UpdateList from "./pages/UpdateList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/addlist" element={<AddList />} />
          <Route path="/updatelist" element={<UpdateList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
