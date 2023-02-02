//aca pone las rutas 
import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { Home } from "../src/components/Pages/Home";
import { ScreenLogin } from "../src/components/Pages/ScreenLogin";
import { ScreenRegister } from "../src/components/Pages/ScreenRegister";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/Login" element={<ScreenLogin />} />
            <Route path="/Register" element={<ScreenRegister />} />
        </Routes>
    )
}
