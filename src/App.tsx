// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './pages/dashboard'

function App() {

  const router = createBrowserRouter(
    // I used the App as the home path to be changed when the homepage is created
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Dashboard />}  />
      </Route>
    )

  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
