import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import ProductList from './pages/Product/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
