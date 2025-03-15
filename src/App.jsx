import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

export default function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}
