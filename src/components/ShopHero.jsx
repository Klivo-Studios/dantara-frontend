import shopHero from "../assets/shophero.jpg";

function ShopHero() {
  return (
    <section>
      <img
        src={shopHero}
        alt="Dental Shop"
        className="w-full h-[400px] object-cover"
      />
    </section>
  );
}

export default ShopHero;