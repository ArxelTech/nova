// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import LoginPage from './pages/auth/login';
import RegistrationPage from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot-password';
import VerifyEmail from './pages/auth/verifyemail';
import SetupUser from './pages/auth/setup-user';

function App() {

  const router = createBrowserRouter(
    // I used the App as the home path to be changed when the homepage is created
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />}  />

        {/* Registration Process */}
        <Route path="register" element={<RegistrationPage />}  />
        <Route path="verify-email" element={<VerifyEmail />}  />
        <Route path="setup-profile" element={<SetupUser />}  />
        
        {/* Forgot Password */}
        <Route path="forgot-password" element={<ForgotPassword />}  />

        <Route path='dashboard' element={<Dashboard />}  />
      </Route>
    )

  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
