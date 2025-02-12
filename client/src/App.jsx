import Navbar from "./Components/Navbar"
import Homepage from "./Pages/Homepage"
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./Pages/LoginPage";

function App() {
 
  return (
    <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/login" element={<LoginPage />} />
  </Routes>
  
  )
}

export default App
