import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Devices from './pages/Devices'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route 
            path='/'
            element={<Devices />}
          />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
