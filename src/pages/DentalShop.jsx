import { useState } from "react";
import Navbar from "../components/Navbar";
import ShopHero from "../components/ShopHero";
import ShopTopBar from "../components/ShopTopBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

function DentalShop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Newest");

  return (
    <>
      <Navbar />
      <ShopHero />

      <ShopTopBar
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
  sort={sort}
  setSort={setSort}
/>

      <ProductGrid
  search={search}
  category={category}
  sort={sort}
/>

      <Footer />
    </>
  );
}

export default DentalShop;