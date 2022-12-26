import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FavoritePage from './components/FavoritePage';
function App() {
  return (

    <BrowserRouter>
       <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route   path='/products/:id'   element={<SingleProduct />}/>
        <Route   path='/cart'   element={<Cart />}/>
        <Route  path='/favorite' element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
