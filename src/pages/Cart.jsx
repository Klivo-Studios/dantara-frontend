import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Rs. {item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-5">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="bg-gray-200 hover:bg-gray-300 w-9 h-9 rounded-full text-xl"
                      >
                        −
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="bg-pink-500 hover:bg-pink-600 text-white w-9 h-9 rounded-full text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <h2 className="text-2xl font-bold text-pink-600">
                      Rs. {item.price * item.quantity}
                    </h2>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="mt-5 text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-pink-50 rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">
                  Grand Total
                </h2>

                <h2 className="text-3xl font-bold text-pink-600">
                  Rs. {grandTotal}
                </h2>
              </div>

              <Link to="/checkout">
                <button className="mt-8 w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-xl font-semibold transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;