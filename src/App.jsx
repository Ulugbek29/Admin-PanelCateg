import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import Table from './components/Pages/Categories/Table/Table'
import TableForm from './components/Pages/Categories/TableForm/TableForm'

export default function App() {
  return (
    <div>
  <Routes>
    <Route path='/' element={<MainLayout />}>
        <Route index path='/categories' element={<Table />} />
        <Route path='/categories/:create' element={<TableForm />} />
    </Route>
    <Route path='*'  element={<div>404</div>}/>
  </Routes>

    </div>
  )
}
