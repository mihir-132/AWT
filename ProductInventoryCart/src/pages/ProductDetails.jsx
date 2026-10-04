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
        return (
            <div className="details-page">
                <div className="details-not-found">
                    <h2>PRODUCT NOT FOUND</h2>
                    <p>The requested product does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <main className="details-page">

            <div className="details-card">

                <div className="details-image-panel">

                    <div className="details-image-glow"></div>

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                </div>

                <div className="details-info">

                    <p className="details-label">
                        // PRODUCT IDENTIFICATION
                    </p>

                    <h1>{product.name}</h1>

                    <div className="details-line"></div>

                    <div className="details-data">

                        <p>
                            <span>PRODUCT ID</span>
                            {product.id}
                        </p>

                        <p>
                            <span>CATEGORY</span>
                            {product.category}
                        </p>

                        <p>
                            <span>PRICE</span>
                            ₹{product.price.toLocaleString("en-IN")}
                        </p>

                        <p>
                            <span>AVAILABLE STOCK</span>
                            {product.quantity}
                        </p>

                    </div>

                    <button
                        className="details-cart-button"
                        onClick={() => addToCart(product)}
                    >
                        ADD TO CART
                    </button>

                </div>

            </div>

        </main>
    );
}

export default ProductDetails;