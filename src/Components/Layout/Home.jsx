import "bootstrap-icons/font/bootstrap-icons.css";
import {Link, Outlet , useLocation} from 'react-router-dom'
import '../../Css/App.css';
import Footer from "./Footer";
import { useState } from "react";
import Summary from "../../Pages/Summary";

function Home() {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])
  const {pathname} = useLocation()

  const addCart = (product)=> {
    setCartCount((c)=> c+1)
    setCart((prev)=> [...prev, product])
  }

  const incQty = (id) =>
  setCart((prev) =>
    prev.map((p) =>
      p.id === id ? { ...p, qty: (p.qty || 1) + 1 } : p
    )
  );

  const decQty = (id) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, (p.qty || 1) - 1) } : p
      )
    );

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
    setCartCount((c) => (c > 0 ? c - 1 : 0));
  };

  return (
    <div className="mainPage">

      <div className="navMain">
        <h1>Shoply</h1>
        <div className="searchBox">
          <i className="fi fi-sr-search"></i><input placeholder="Search" className="inputSearch" type="text" />
        </div>
        
        <Link className="bi bi-person-circle" to="/login"></Link>
      </div>

      <div className=" firstSection">
          <header className="headerSection">
          <nav>
            <ul>
              <li>
                <Link className="bi bi-house" to="/"> Home</Link>
              </li>
              <li>
                <Link className="bi bi-bag" to="/shop"> Shop</Link>
              </li>
              <li>
                <Link className="bi bi-cart" to="/cart"> Cart <span style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "red",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1
                }}>{cartCount}</span></Link>
              </li>
            </ul>
          </nav>
          <hr className="divisor" />
        </header>

        <section className="Content">
          <Outlet context={{addCart, cartCount, cart ,incQty, decQty, removeItem}}/>
        </section>

        

      </div>

      <Footer/> 
      {pathname === "/cart"&& cart.length > 0 && <Summary cart={cart}/>}
    </div>
  )
}

export default Home
