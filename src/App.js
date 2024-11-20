import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import Header from './Components/Header/Header';
import OrderList from './Components/Admin/Orders/OrderList';
import Slides from './Components/Home/Carousel/Slides';
import Footer from './Components/Footer/Footer';
import Registration from './Components/Register/Registration';
// import Footer from './Components/Footer/Footer';
import EmployeeDetails from './Components/Admin/Employee/EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <div className="app-container">
        <Routes>
        <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/:itemId' element={<OrderList />} />
          <Route path= "" element ={<Slides/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path='/admin/order/:itemId' element={<OrderList />} />
          <Route path='/admin/employees' element={<EmployeeDetails />} />
        </Routes>
      </main>
      <Footer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
