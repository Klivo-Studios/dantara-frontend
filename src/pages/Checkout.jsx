import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  const {
  cart,
  clearCart,
} = useCart();

const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handlePlaceOrder = () => {
  if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !address.trim()
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const orderData = {
  customerName: name,
  paymentMethod: payment,
  total: grandTotal,
  orderNumber: "DNT-" + Math.floor(100000 + Math.random() * 900000),
  orderDate: new Date().toLocaleString(),
};

clearCart();

navigate("/order-success", {
  state: orderData,
});
};

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Customer Information */}
          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Customer Information
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-lg p-3"
            />

            <h3 className="text-xl font-bold mt-6 mb-4">
              Payment Method
            </h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={payment === "Cash on Delivery"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="eSewa"
                  checked={payment === "eSewa"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                eSewa
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="Khalti"
                  checked={payment === "Khalti"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Khalti
              </label>

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-pink-50 shadow-lg rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between mb-4"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}

                <hr className="my-6" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>

                  <span className="text-pink-600">
                    Rs. {grandTotal}
                  </span>
                </div>

                <button
  onClick={handlePlaceOrder}
  className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-xl font-semibold transition"
>
  Place Order
</button>
              </>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;