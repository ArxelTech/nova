import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Streaming from './pages/streaming'
import LoginPage from './pages/auth/login';
import RegistrationPage from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot-password';
import VerifyEmail from './pages/auth/verifyemail';
import SetupUser from './pages/auth/setup-user';
import Dashboard from './pages/dashboard';
import JoinParty from './pages/joinparty';

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
        <Route path='join-party' element={<JoinParty />}  />
        <Route path='streaming' element={<Streaming />}  />
      </Route>
    )

  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
