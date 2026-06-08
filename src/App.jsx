import { useState } from 'react'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-brand">TechVault</span>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cart-btn" type="button" aria-label={`Cart with ${cartCount} items`}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <span className="hero-badge">New Arrivals</span>
          <h1>Premium Tech,<br />Unbeatable Prices</h1>
          <p className="hero-subtitle">
            Discover our handpicked selection of cutting-edge technology
            designed to elevate your everyday workflow.
          </p>
          <a href="#products" className="hero-cta">Shop Now</a>
        </div>
      </header>

      <main id="products">
        <ProductList onAddToCart={handleAddToCart} />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2026 TechVault. All rights reserved.</p>
          <p className="footer-tagline">Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
