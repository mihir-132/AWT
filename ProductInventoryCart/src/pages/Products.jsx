import { useState } from "react";
import ProductList from "../components/ProductList";

function Products() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    return (
        <div>
            <h1 className="page-title">OUR PRODUCTS</h1>

            <ProductList
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
            />
        </div>
    );
}

export default Products;