import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import ScreenLogin from "./components/Pages/ScreenLogin";
import ScreenRegister from "./components/Pages/ScreenRegister";


function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Login" element={<ScreenLogin/>}/>
        <Route path="/Register" element={<ScreenRegister/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
