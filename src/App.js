import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        <Routes>
          <Route exact path='/admindashboard' element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
