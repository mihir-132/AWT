import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home-page">

            <section className="hero">

                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <p className="hero-label">
                        // NEXT GENERATION INVENTORY SYSTEM
                    </p>

                    <h1>
                        AETHER{" "}
                        <span>STORE</span>
                    </h1>

                    <p className="hero-description">
                        Your one-stop futuristic inventory
                        and shopping destination.
                    </p>

                    <Link to="/products" className="hero-button">
    			EXPLORE PRODUCTS
                    </Link>

                    <div className="hero-features">

                        <div className="hero-feature">
                            <span>◆</span>
                            <p>Quality Products</p>
                        </div>

                        <div className="hero-feature">
                            <span>⚡</span>
                            <p>Fast & Easy Shopping</p>
                        </div>

                        <div className="hero-feature">
                            <span>◇</span>
                            <p>Secure & Reliable</p>
                        </div>

                    </div>

                </div>

                <div className="hero-scanline"></div>

            </section>

        </main>
    );
}

export default Home;