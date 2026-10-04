import { useMemo } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function ProductList({ search, setSearch, category, setCategory }) {

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {

            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                category === "All" ||
                product.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <section className="products-section">

            <div className="products-toolbar">

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />

            </div>

            {filteredProducts.length > 0 ? (

                <div className="product-grid">

                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            ) : (

                <div className="no-products">
                    <p>No products found.</p>
                </div>

            )}

        </section>
    );
}

export default ProductList;