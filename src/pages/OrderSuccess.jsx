import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  const location = useLocation();

  const order = location.state;

  if (!order) {
    return (
      <>
        <Navbar />

        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl font-bold text-red-500">
            No Order Found
          </h1>

          <p className="mt-6 text-gray-600">
            Please place an order first.
          </p>

          <Link to="/shop">
            <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl">
              Go to Shop
            </button>
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-20 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

          <div className="text-7xl mb-6">
            ✅
          </div>

          <h1 className="text-5xl font-bold text-green-600 mb-8">
            Order Successful!
          </h1>

          <p className="text-xl text-gray-600 mb-10">
            Thank you for shopping at
            <br />
            <span className="font-bold text-pink-600">
              Dantara Dental Clinic
            </span>
          </p>

          <div className="bg-pink-50 rounded-2xl p-8 text-left space-y-5">

            <div className="flex justify-between">
              <span className="font-semibold">Order Number</span>
              <span>{order.orderNumber}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Customer</span>
              <span>{order.customerName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Payment Method</span>
              <span>{order.paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Order Date</span>
              <span>{order.orderDate}</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total Paid</span>
              <span className="text-pink-600">
                Rs. {order.total}
              </span>
            </div>

          </div>

          <Link to="/shop">
            <button className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-xl text-xl font-semibold transition">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;