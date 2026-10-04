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
            <main className="cart-page">

                <div className="cart-empty">

                    <p className="cart-label">
                        // SHOPPING SYSTEM
                    </p>

                    <h1>SHOPPING CART</h1>

                    <div className="cart-line"></div>

                    <p>
                        Your cart is currently empty.
                    </p>

                </div>

            </main>
        );
    }

    return (
        <main className="cart-page">

            <div className="cart-header">

                <div>
                    <p className="cart-label">
                        // SHOPPING SYSTEM
                    </p>

                    <h1>SHOPPING CART</h1>
                </div>

                <div className="cart-count">
                    {cart.length} ITEM{cart.length !== 1 ? "S" : ""}
                </div>

            </div>

            <div className="cart-layout">

                <section className="cart-items-panel">

                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))}

                </section>

                <aside className="cart-summary">

                    <p className="summary-label">
                        // TRANSACTION SUMMARY
                    </p>

                    <h2>ORDER SUMMARY</h2>

                    <div className="summary-line"></div>

                    <div className="summary-total">

                        <span>TOTAL</span>

                        <strong>
                            ₹{totalPrice.toLocaleString("en-IN")}
                        </strong>

                    </div>

                    <button className="checkout-button">
                        PROCEED TO CHECKOUT
                    </button>

                </aside>

            </div>

        </main>
    );
}

export default Cart;