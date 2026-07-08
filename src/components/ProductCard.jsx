import { Link } from "react-router-dom";
import ProductImages from "../data/ProductImages";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
  <Link to={`/product/${product._id}`}>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

      <img
        src={ProductImages[product.image]}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-pink-600 font-bold text-xl mt-4">
          Rs. {product.price}
        </p>

        <button
          onClick={(e) => e.preventDefault()}
          className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
        >
          Add to Cart
        </button>

      </div>

    </div>
  </Link>
);
}

export default ProductCard;