function CategoryFilter({ category, setCategory }) {
    return (
        <div>
            <label htmlFor="category">Category: </label>

            <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Stationery">Stationery</option>
            </select>
        </div>
    );
}

export default CategoryFilter;