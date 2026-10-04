import { useCart } from "../context/CartContext";

function CartItem({ item }) {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    return (
        <div className="cart-item">

            <div className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                />
            </div>

            <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>

                <p>Quantity: {item.cartQuantity}</p>

                <div className="cart-quantity-controls">

                    <button
                        onClick={() => decreaseQuantity(item.id)}
                    >
                        -
                    </button>

                    <button
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
            >
                Remove
            </button>

            <p className="cart-subtotal">
                Subtotal: ₹{(item.price * item.cartQuantity).toLocaleString("en-IN")}
            </p>

        </div>
    );
}

export default CartItem;