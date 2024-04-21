import Image from "next/image";

function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="h-48 w-48 absolute -left-12 text-left">
          <Image
            src={"/saladone.png"}
            alt="salad"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-48 w-48 absolute -top-12 -right-12">
          <Image
            src={"/saladtwo.png"}
            alt="salad"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold">Check Out</h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
    </section>
  );
}

export default HomeMenu;
