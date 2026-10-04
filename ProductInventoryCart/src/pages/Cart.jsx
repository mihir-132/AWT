import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

    const { cart } = useCart();

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (total, item) =>
                total + item.price * item.cartQuantity,
            0
        );
    }, [cart]);

    if (cart.length === 0) {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                />
            ))}

            <hr />

            <h2>
                Total: ₹{totalPrice}
            </h2>

            <button>Checkout</button>
        </div>
    );
}

export default Cart;