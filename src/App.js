import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import Header from './Components/Header/Header';
import OrderList from './Components/Admin/Orders/OrderList';
import EmployeeDetails from './Components/Admin/Employee/EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/:itemId' element={<OrderList />} />
          <Route path='/admin/employees' element={<EmployeeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
