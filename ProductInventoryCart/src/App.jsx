import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
    return (
        <BrowserRouter>
           <nav className="navbar">

   		 <div className="nav-logo">
        		AETHER STORE
    		</div>

   		 <div className="nav-links">

   			 <NavLink to="/">
        			Home
    			</NavLink>

    			<NavLink to="/products">
        			Products
    			</NavLink>

    			<NavLink to="/cart">
        			Cart
    			</NavLink>

		</div>

           </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
		<Route path="/products/:id" element={<ProductDetails />} />
		<Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;