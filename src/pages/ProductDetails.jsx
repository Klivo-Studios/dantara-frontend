import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductImages from "../data/ProductImages";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="text-center py-20 text-2xl">
          Loading...
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Product Image */}

          <img
            src={ProductImages[product.image]}
            alt={product.name}
            className="rounded-2xl shadow-xl w-full"
          />

          {/* Product Info */}

          <div>

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <p className="text-pink-600 text-3xl font-bold mt-6">
              Rs. {product.price}
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>

            <div className="mt-8">

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p className="mt-2">
                <strong>Stock:</strong> {product.stock}
              </p>

            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-xl text-xl"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;