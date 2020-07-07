     import React from 'react';
     import './App.css';
     import {BrowserRouter,  Route, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SigininScreen from './screens/SigninScreen';

     function App() {
          const openMenu = () => {
               document.querySelector(".sidebar").classList.add("open");
          }
          const closeMenu = () => {
               document.querySelector(".sidebar").classList.remove("open");
          }
     return (
          <BrowserRouter>
          <div className="grid-container">
          <header className="header">
               <div className="brand">
                    <button onClick={openMenu}>
                         &#9776;
                    </button>
                    
                    <Link to="/">Lap<span className="lod">Store</span></Link>
               </div>
               <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    <Link to="/signin" >Sign IN</Link>
                    
               </div>
          </header>
          <aside className="sidebar">
               <h3>Shoping Categories</h3>
               <button className="sidebar-close-button" onClick={closeMenu}>
               X
               </button>
               <ul>
               <li className="product">
                         <Link  to="/">All Product</Link>
                    </li>
                    <li className="new">
                         <a  href="index.html">New</a>
                    </li>
                    <li className="used">
                         <a  href="index.html">Uesd</a>
                    </li>
               </ul>
          </aside>
          <main className="main">
               <div className="content">
                         <Route path="/signin" component={SigininScreen} />
                         <Route path="/product/:id" component={ProductScreen} />
                         <Route path="/cart/:id?" component={CartScreen} />
                         <Route path="/" exact={true} component={HomeScreen} />
                    

               </div>
          </main>
          <footer className="footer">all</footer>
     </div>
     </BrowserRouter> 
     );
     }

     export default App;
