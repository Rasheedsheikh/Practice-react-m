import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        {/* <Routes>
          <Route exact path='/clients' element={Clients} />

          <Route exact path='/login' element={<Login />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
