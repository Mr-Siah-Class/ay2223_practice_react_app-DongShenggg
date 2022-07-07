import React from 'react';
import './App.css';

import NavBar from './component/NavBar';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

import HomeScreen from './screen/HomeScreen';
import ProductsScreen from './screen/ProductsScreen';
import NoScreen from './screen/NoScreen';
import FooterBar from './component/FooterBar';
import SingleProductScreen from './screen/SingleProductScreen';
import ProfileScreen from './screen/UserProfile';
import CartScreen from './screen/UserCart';

const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductScreen productId={productId} />;
};

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
              <NavBar/>
              <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<ProductIdWrapper/>}/>
                    <Route path="/profile" element={<ProfileScreen/>}/>
                    <Route path="/cart" element={<CartScreen/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;