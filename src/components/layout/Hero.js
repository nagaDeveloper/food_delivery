import Image from "next/image";
import Right from "../icons/Right";

function Hero() {
  return (
    <section className="hero mt-6">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is a wwondeful item to eat and its very awesome item.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex  gap-2 py-3 text-gray-600 font-semibold">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className="w-76 h-60 relative">
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt="pizza"
        />
      </div>
    </section>
  );
}

export default Hero;
