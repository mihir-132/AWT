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
        <div>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <CategoryFilter
                category={category}
                setCategory={setCategory}
            />

            <br />

            {filteredProducts.length > 0 ? (
                <div>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}

        </div>
    );
}

export default ProductList;