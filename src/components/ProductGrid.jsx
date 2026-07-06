import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

function ProductGrid({ search, category, sort }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  .then((res) => {
    console.log(res.data);
    setProducts(res.data);
  })
  .catch((err) => {
    console.error(err);
  });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Dental Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products
  .filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    if (sort === "Price: Low to High") {
      return a.price - b.price;
    }

    if (sort === "Price: High to Low") {
      return b.price - a.price;
    }

    return 0;
  })
  .map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;