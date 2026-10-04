import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {

    const { id } = useParams();

    const { addToCart } = useCart();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return <h2>Product not found.</h2>;
    }

    return (
        <div className="product-details">

            <h1>{product.name}</h1>

            <img
                src={product.image}
                alt={product.name}
            />

            <p>Product ID: {product.id}</p>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price}</p>

            <p>Available Quantity: {product.quantity}</p>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

        </div>
    );
}

export default ProductDetails;