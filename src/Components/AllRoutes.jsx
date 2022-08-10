import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {CarPage} from '../Pages/CartegoryPages/CarPage'
import {CommericalVPage} from '../Pages/CartegoryPages/CommericalVPage'
import {HouseSalePage} from '../Pages/CartegoryPages/HouseSalePage'
import {ScootersPage} from '../Pages/CartegoryPages/ScootersPage'
import {MotorcyclePage} from '../Pages/CartegoryPages/MotorcyclePage'
import {HouseRentPage} from '../Pages/CartegoryPages/HouseRentPage'
import Dropdown from './Dropdown'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/dropdown'} element={<Dropdown />}></Route>
        <Route path={'/cars'} element={<CarPage/>}></Route>
        <Route path={'/motarcycles'} element={<MotorcyclePage/>}></Route>
        <Route path={'/forsale'} element={<HouseSalePage/>}></Route>
        <Route path={'/scooters'} element={<ScootersPage/>}></Route>
        <Route path={'/commercial'} element={<CommericalVPage/>}></Route>
        <Route path={'/forrent'} element={<HouseRentPage/>}></Route>
        {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
        
        </Routes>
    </div>
  )
}

export default AllRoutes