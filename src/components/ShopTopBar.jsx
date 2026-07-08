import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function ShopTopBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {
  const { cart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between gap-6">

        {/* Left Side - Cart + Search */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-xl font-semibold hover:text-pink-600 transition"
          >
            <span>Cart</span>
            <FaShoppingCart className="text-2xl" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Search */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-3 w-[450px]">
            <FaSearch className="text-gray-400 mr-3" />

            <input
  type="text"
  placeholder="Search dental products..."
  className="w-full outline-none"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Category */}
          <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border rounded-full px-5 py-3 shadow-sm"
>
            <option>All Categories</option>
<option>Toothbrush</option>
<option>Toothpaste</option>
<option>Mouthwash</option>
<option>Floss</option>
<option>Kids</option>
<option>Orthodontics</option>
<option>Safety</option>
<option>Oral Care</option>
<option>Medicine</option>
<option>Travel</option>
          </select>

          {/* Sort */}
          <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="border rounded-full px-5 py-3 shadow-sm"
>
  <option>Sort By</option>
  <option>Price: Low to High</option>
  <option>Price: High to Low</option>
</select>

        </div>

      </div>
    </section>
  );
}

export default ShopTopBar;