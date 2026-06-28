import smileVector from "../assets/smile-vector.svg";

function HappySmiles() {
  return (
    <section className="py-20">
      <div className="text-center">

        <h2 className="text-5xl font-bold text-pink-600">
          100%
        </h2>

        <h3 className="text-4xl font-bold text-pink-600 mt-2">
          Happy Smiles
        </h3>

        <div className="mt-2 flex justify-center">
          <img
            src={smileVector}
            alt="Happy smile"
            className="w-[36rem] md:w-[52rem] max-w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default HappySmiles;
