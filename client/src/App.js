// PRIME  REACT
import PrimeReact from 'primereact/api';
import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// PRIME FLEX
import "/node_modules/primeflex/primeflex.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

//  Components
import Navbar from './shared/navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';

import NotFound from './pages/NotFound/NotFound';

function App() {
  PrimeReact.ripple = true;
  return (
    <Router>
      <Navbar />
      {/* Routes system */}
      <Routes>
        {/* Default component - Main Page */}
        <Route path="/" index element={ <MainPage /> } />

        {/* Auth routes - Login & Register */}
        <Route path="auth" element={ <Navigate to="login" /> }/>
        <Route path="auth/login" element={ <Login /> } />
        <Route path="auth/register" element={ <Register />} />


        {/* PROTECTED component - User Dashboard */}
        <Route path="/dashboard" element={ <Dashboard />} />

        {/* Route to eny other route that there's not in our app */}
        <Route path="*" element={ < NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
