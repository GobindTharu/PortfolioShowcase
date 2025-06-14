
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
