import { useCart } from "../context/CartContext";

function CartItem({ item }) {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    return (
        <div className="cart-item">

            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.cartQuantity}</p>

            <button onClick={() => decreaseQuantity(item.id)}>
                -
            </button>

            <button onClick={() => increaseQuantity(item.id)}>
                +
            </button>

            <button onClick={() => removeFromCart(item.id)}>
                Remove
            </button>

            <p>
                Subtotal: ₹{item.price * item.cartQuantity}
            </p>

        </div>
    );
}

export default CartItem;