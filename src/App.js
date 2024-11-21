import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import Header from './Components/Header/Header';
import OrderList from './Components/Admin/Orders/OrderList';
import Slides from './Components/Home/Carousel/Slides';
import Footer from './Components/Footer/Footer';
import Registration from './Components/Register/Registration';
import EmployeeDetails from './Components/Admin/Employee/EmployeeDetails/EmployeeDetails';
import AllOrdersList from './Components/Admin/Orders/AllOrdersList';
import Login from './Components/Login/Login';

function App() {
  const location = useLocation();

  // Check if the current route is '/login'
  const isLoginRoute = location.pathname === '/login';

  return (
    <div className="app-container">
      {/* Render Header and Footer only if not on '/login' route */}
      {!isLoginRoute && <Header />}

      {/* Only render the 'main-content' section if not on '/login' */}
      {!isLoginRoute ? (
        <main className='main-content'>
          <Routes>
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/:itemId' element={<OrderList />} />
            <Route path="" element={<Slides />} />
            <Route path="/registration" element={<Registration />} />
            <Route path='/admin/order/:itemId' element={<OrderList />} />
            <Route path='/admin/orders' element={<AllOrdersList />} />
            <Route path='/admin/employees' element={<EmployeeDetails />} />
          </Routes>
        </main>
      ) : (
        // Render the Login page outside the 'main-content' section
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      )}

      {/* Render Footer only if not on '/login' route */}
      {!isLoginRoute && <Footer />}
    </div>
  );
}

export default App;
