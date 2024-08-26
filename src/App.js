import './App.css';
import Sidenavbar from './components/sidenavbar/Sidenavbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Settings from './pages/settings/Settings';
import Analytics from './pages/analytics/Analytics';
import './style/dark.css'


function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/product' exact element={<Product />}></Route>
          <Route path='/analytics' exact element={<Analytics />}></Route>
          {/* <Route path='/settings' exact element={<Settings />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
