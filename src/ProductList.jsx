import './ProductList.css'

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop for professionals. Features a 15-inch Retina display and all-day battery life.",
    price: 1200,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-canceling headphones with premium sound quality and 30-hour battery life.",
    price: 250,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with tactile switches, built for speed and durability.",
    price: 150,
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "Ultra-sharp 27-inch IPS display with HDR support for creative professionals.",
    price: 450,
  },
  {
    id: 5,
    name: "Portable SSD",
    description: "1TB external drive with blazing-fast USB-C transfer speeds up to 2000MB/s.",
    price: 100,
  },
  {
    id: 6,
    name: "Webcam Pro",
    description: "4K streaming camera with auto-focus, low-light correction, and built-in mic.",
    price: 180,
  },
]

function ProductList({ onAddToCart }) {
  return (
    <section className="product-list">
      <div className="product-list-header">
        <h2>Featured Products</h2>
        <p>Everything you need to build your ideal setup</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price.toFixed(2)}</span>
              <button
                className="product-btn"
                type="button"
                onClick={onAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductList
