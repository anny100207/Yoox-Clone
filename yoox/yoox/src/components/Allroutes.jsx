import React from 'react'
import {Route, Routes}  from "react-router-dom"
import Kids from '../pages/Kids'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
// import WomensProducts from '../pages/WomensProducts'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/womens'  element={<Womens/>}/>
            <Route path='/mens'  element={<Mens/>}/>
            <Route path='/kids'  element={<Kids/>}/>
            {/* <Route path='/womenswear'  element={<WomensProducts/>}/> */}
            
        </Routes>
    </div>
  )
}

export default Allroutes