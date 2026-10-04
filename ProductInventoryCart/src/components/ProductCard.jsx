import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

    const { addToCart } = useCart();

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>

            <p>Available: {product.quantity}</p>

            <Link to={`/products/${product.id}`}>
                <button>View Details</button>
            </Link>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;